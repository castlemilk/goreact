package echo

import (
	"context"
	"net/http"
	"strings"

	_ "github.com/castlemilk/goreact/server/internal/statik"
	"github.com/castlemilk/goreact/server/pkg/log"
	echopb "github.com/castlemilk/goreact/server/pkg/services/echo"
	grpc_middleware "github.com/grpc-ecosystem/go-grpc-middleware"
	grpc_zap "github.com/grpc-ecosystem/go-grpc-middleware/logging/zap"
	grpc_ctxtags "github.com/grpc-ecosystem/go-grpc-middleware/tags"
	"github.com/grpc-ecosystem/grpc-gateway/v2/runtime"
	statikfs "github.com/rakyll/statik/fs"
	"golang.org/x/net/http2"
	"golang.org/x/net/http2/h2c"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	"google.golang.org/protobuf/encoding/protojson"
)

const grpcContentType = "application/grpc"
const grpcWebContentType = "application/grpc-web"
const grpcWebTextContentType = "application/grpc-web-text"

func (s *echoServer) Serve(ctx context.Context, logger *log.Logger, address string) error {

	gRPCServer := s.newgRPCServer(ctx, logger)
	mux, err := s.newHTTPHandler(ctx, address)
	if err != nil {
		return err
	}
	registerSwaggerUI(mux)
	server := &http.Server{
		Addr:    address,
		Handler: dispatcher(ctx, gRPCServer, mux),
	}
	return server.ListenAndServe()
}

func registerSwaggerUI(mux *http.ServeMux) {

	statikFS, err := statikfs.New()
	if err != nil {
		panic(err)
	}
	staticServer := http.FileServer(statikFS)
	sh := http.StripPrefix("/api/docs/", staticServer)
	mux.Handle("/api/docs/", sh)
}

// dispatch enables support for grpc and rest on same port
func dispatcher(ctx context.Context, grpcHandler http.Handler, httpHandler http.Handler) http.Handler {
	hf := func(w http.ResponseWriter, r *http.Request) {
		if (r.ProtoMajor == 2 || r.Method == http.MethodPost) && strings.HasPrefix(r.Header.Get("Content-Type"), "application/grpc") {
			log.Infof("grpc request")
			grpcHandler.ServeHTTP(w, r)
		} else {
			log.Infof("http request")
			httpHandler.ServeHTTP(w, r)
		}
	}
	return allowCORS(h2c.NewHandler(http.HandlerFunc(hf), &http2.Server{}))
}

func (s *echoServer) newgRPCServer(ctx context.Context, logger *log.Logger) *grpc.Server {
	// Shared options for the logger, with a custom gRPC code to log level function.
	opts := []grpc_zap.Option{
		grpc_zap.WithLevels(log.LevelFunc),
	}
	zapLogger := logger.Desugar()
	// Make sure that log statements internal to gRPC library are logged using the zapLogger as well.
	grpc_zap.ReplaceGrpcLogger(zapLogger)
	grpcServer := grpc.NewServer(
		grpc_middleware.WithUnaryServerChain(
			grpc_ctxtags.UnaryServerInterceptor(grpc_ctxtags.WithFieldExtractor(grpc_ctxtags.CodeGenRequestFieldExtractor)),
			grpc_zap.UnaryServerInterceptor(zapLogger, opts...),
		),
		grpc_middleware.WithStreamServerChain(
			grpc_ctxtags.StreamServerInterceptor(grpc_ctxtags.WithFieldExtractor(grpc_ctxtags.CodeGenRequestFieldExtractor)),
			grpc_zap.StreamServerInterceptor(zapLogger, opts...),
		),
	)
	echopb.RegisterEchoServiceServer(grpcServer, s)
	reflection.Register(grpcServer)
	return grpcServer
}

func (s *echoServer) newHTTPHandler(ctx context.Context, address string) (*http.ServeMux, error) {
	gwmux := runtime.NewServeMux(runtime.WithMarshalerOption("application/json+pretty", &runtime.JSONPb{MarshalOptions: protojson.MarshalOptions{Indent: " "}}))
	if err := echopb.RegisterEchoServiceHandlerFromEndpoint(ctx, gwmux, address, []grpc.DialOption{grpc.WithInsecure()}); err != nil {
		return nil, err
	}
	mux := http.NewServeMux()
	mux.Handle("/", gwmux)
	return mux, nil
}

func preflightHandler(w http.ResponseWriter, r *http.Request) {
	// headers := []string{"Content-Type", "Accept", ""}
	w.Header().Set("Access-Control-Allow-Headers", "*")
	methods := []string{"GET", "HEAD", "POST", "PUT", "DELETE"}
	w.Header().Set("Access-Control-Allow-Methods", strings.Join(methods, ","))
	log.Infof("preflight request for %s", r.URL.Path)
	return
}

// allowCORS allows Cross Origin Resoruce Sharing from any origin.
// Don't do this without consideration in production systems.
func allowCORS(h http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		if origin := r.Header.Get("Origin"); origin != "" {
			w.Header().Set("Access-Control-Allow-Origin", origin)
			if r.Method == "OPTIONS" && r.Header.Get("Access-Control-Request-Method") != "" {
				preflightHandler(w, r)
				return
			}
		}
		h.ServeHTTP(w, r)
	})
}
