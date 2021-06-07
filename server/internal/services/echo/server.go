package echo

import (
	"context"

	echopb "github.com/castlemilk/goreact/server/pkg/services/echo"
	"github.com/improbable-eng/grpc-web/go/grpcweb"
	"google.golang.org/grpc"
)

// echoServer ...
type echoServer struct {
	config Config
	echopb.UnimplementedEchoServiceServer
	*grpcweb.WrappedGrpcServer
}

// New creates instance of the Server
func New(ctx context.Context, cfg Config) (*echoServer, error) {

	return &echoServer{
		config: cfg,
	}, nil
}

func (s *echoServer) WrapGrpcServer(g *grpc.Server) {
	options := []grpcweb.Option{
		grpcweb.WithCorsForRegisteredEndpointsOnly(false),
		grpcweb.WithOriginFunc(func (origin string) bool {return true}),
	}
	s.WrappedGrpcServer = grpcweb.WrapServer(g, options...)
}
