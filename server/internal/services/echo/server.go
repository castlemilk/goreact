package echo

import (
	"context"

	echopb "github.com/castlemilk/goreact/server/pkg/services/echo"
)

// echoServer ...
type echoServer struct {
	config Config
	echopb.UnimplementedEchoServiceServer
}

// New creates instance of the Server
func New(ctx context.Context, cfg Config) (*echoServer, error) {

	return &echoServer{
		config: cfg,
	}, nil
}
