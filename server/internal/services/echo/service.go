package echo

import (
	"context"

	"github.com/castlemilk/goreact/server/pkg/log"
	echopb "github.com/castlemilk/goreact/server/pkg/services/echo"
	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
)

// validate ServerServer implements echopb.ServerService
var _ echopb.EchoServiceServer = (*echoServer)(nil)

func (s *echoServer) Echo(ctx context.Context, msg *echopb.SimpleMessage) (*echopb.SimpleMessage, error) {
	log.Infof("echo: ", msg)
	return msg, nil
}

func (s *echoServer) EchoBody(ctx context.Context, msg *echopb.SimpleMessage) (*echopb.SimpleMessage, error) {
	log.Infof("echoBody: ", msg)
	grpc.SendHeader(ctx, metadata.New(map[string]string{
		"foo": "foo1",
		"bar": "bar1",
	}))
	grpc.SetTrailer(ctx, metadata.New(map[string]string{
		"foo": "foo2",
		"bar": "bar2",
	}))
	return msg, nil
}

func (s *echoServer) EchoDelete(ctx context.Context, msg *echopb.SimpleMessage) (*echopb.SimpleMessage, error) {
	log.Infof("echoDelete: ", msg)
	return msg, nil
}

func (s *echoServer) EchoPatch(ctx context.Context, msg *echopb.DynamicMessageUpdate) (*echopb.DynamicMessageUpdate, error) {
	log.Infof("echoPatch: ", msg)
	return msg, nil
}
