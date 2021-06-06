// package: goreact.echo
// file: services/echo/echo.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as services_echo_echo_pb from "../../services/echo/echo_pb";
import * as google_protobuf_field_mask_pb from "google-protobuf/google/protobuf/field_mask_pb";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

interface IEchoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    echo: IEchoServiceService_IEcho;
    echoBody: IEchoServiceService_IEchoBody;
    echoDelete: IEchoServiceService_IEchoDelete;
    echoPatch: IEchoServiceService_IEchoPatch;
}

interface IEchoServiceService_IEcho extends grpc.MethodDefinition<services_echo_echo_pb.SimpleMessage, services_echo_echo_pb.SimpleMessage> {
    path: "/goreact.echo.EchoService/Echo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<services_echo_echo_pb.SimpleMessage>;
    requestDeserialize: grpc.deserialize<services_echo_echo_pb.SimpleMessage>;
    responseSerialize: grpc.serialize<services_echo_echo_pb.SimpleMessage>;
    responseDeserialize: grpc.deserialize<services_echo_echo_pb.SimpleMessage>;
}
interface IEchoServiceService_IEchoBody extends grpc.MethodDefinition<services_echo_echo_pb.SimpleMessage, services_echo_echo_pb.SimpleMessage> {
    path: "/goreact.echo.EchoService/EchoBody";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<services_echo_echo_pb.SimpleMessage>;
    requestDeserialize: grpc.deserialize<services_echo_echo_pb.SimpleMessage>;
    responseSerialize: grpc.serialize<services_echo_echo_pb.SimpleMessage>;
    responseDeserialize: grpc.deserialize<services_echo_echo_pb.SimpleMessage>;
}
interface IEchoServiceService_IEchoDelete extends grpc.MethodDefinition<services_echo_echo_pb.SimpleMessage, services_echo_echo_pb.SimpleMessage> {
    path: "/goreact.echo.EchoService/EchoDelete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<services_echo_echo_pb.SimpleMessage>;
    requestDeserialize: grpc.deserialize<services_echo_echo_pb.SimpleMessage>;
    responseSerialize: grpc.serialize<services_echo_echo_pb.SimpleMessage>;
    responseDeserialize: grpc.deserialize<services_echo_echo_pb.SimpleMessage>;
}
interface IEchoServiceService_IEchoPatch extends grpc.MethodDefinition<services_echo_echo_pb.DynamicMessageUpdate, services_echo_echo_pb.DynamicMessageUpdate> {
    path: "/goreact.echo.EchoService/EchoPatch";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<services_echo_echo_pb.DynamicMessageUpdate>;
    requestDeserialize: grpc.deserialize<services_echo_echo_pb.DynamicMessageUpdate>;
    responseSerialize: grpc.serialize<services_echo_echo_pb.DynamicMessageUpdate>;
    responseDeserialize: grpc.deserialize<services_echo_echo_pb.DynamicMessageUpdate>;
}

export const EchoServiceService: IEchoServiceService;

export interface IEchoServiceServer extends grpc.UntypedServiceImplementation {
    echo: grpc.handleUnaryCall<services_echo_echo_pb.SimpleMessage, services_echo_echo_pb.SimpleMessage>;
    echoBody: grpc.handleUnaryCall<services_echo_echo_pb.SimpleMessage, services_echo_echo_pb.SimpleMessage>;
    echoDelete: grpc.handleUnaryCall<services_echo_echo_pb.SimpleMessage, services_echo_echo_pb.SimpleMessage>;
    echoPatch: grpc.handleUnaryCall<services_echo_echo_pb.DynamicMessageUpdate, services_echo_echo_pb.DynamicMessageUpdate>;
}

export interface IEchoServiceClient {
    echo(request: services_echo_echo_pb.SimpleMessage, callback: (error: grpc.ServiceError | null, response: services_echo_echo_pb.SimpleMessage) => void): grpc.ClientUnaryCall;
    echo(request: services_echo_echo_pb.SimpleMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_echo_echo_pb.SimpleMessage) => void): grpc.ClientUnaryCall;
    echo(request: services_echo_echo_pb.SimpleMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_echo_echo_pb.SimpleMessage) => void): grpc.ClientUnaryCall;
    echoBody(request: services_echo_echo_pb.SimpleMessage, callback: (error: grpc.ServiceError | null, response: services_echo_echo_pb.SimpleMessage) => void): grpc.ClientUnaryCall;
    echoBody(request: services_echo_echo_pb.SimpleMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_echo_echo_pb.SimpleMessage) => void): grpc.ClientUnaryCall;
    echoBody(request: services_echo_echo_pb.SimpleMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_echo_echo_pb.SimpleMessage) => void): grpc.ClientUnaryCall;
    echoDelete(request: services_echo_echo_pb.SimpleMessage, callback: (error: grpc.ServiceError | null, response: services_echo_echo_pb.SimpleMessage) => void): grpc.ClientUnaryCall;
    echoDelete(request: services_echo_echo_pb.SimpleMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_echo_echo_pb.SimpleMessage) => void): grpc.ClientUnaryCall;
    echoDelete(request: services_echo_echo_pb.SimpleMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_echo_echo_pb.SimpleMessage) => void): grpc.ClientUnaryCall;
    echoPatch(request: services_echo_echo_pb.DynamicMessageUpdate, callback: (error: grpc.ServiceError | null, response: services_echo_echo_pb.DynamicMessageUpdate) => void): grpc.ClientUnaryCall;
    echoPatch(request: services_echo_echo_pb.DynamicMessageUpdate, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_echo_echo_pb.DynamicMessageUpdate) => void): grpc.ClientUnaryCall;
    echoPatch(request: services_echo_echo_pb.DynamicMessageUpdate, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_echo_echo_pb.DynamicMessageUpdate) => void): grpc.ClientUnaryCall;
}

export class EchoServiceClient extends grpc.Client implements IEchoServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public echo(request: services_echo_echo_pb.SimpleMessage, callback: (error: grpc.ServiceError | null, response: services_echo_echo_pb.SimpleMessage) => void): grpc.ClientUnaryCall;
    public echo(request: services_echo_echo_pb.SimpleMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_echo_echo_pb.SimpleMessage) => void): grpc.ClientUnaryCall;
    public echo(request: services_echo_echo_pb.SimpleMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_echo_echo_pb.SimpleMessage) => void): grpc.ClientUnaryCall;
    public echoBody(request: services_echo_echo_pb.SimpleMessage, callback: (error: grpc.ServiceError | null, response: services_echo_echo_pb.SimpleMessage) => void): grpc.ClientUnaryCall;
    public echoBody(request: services_echo_echo_pb.SimpleMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_echo_echo_pb.SimpleMessage) => void): grpc.ClientUnaryCall;
    public echoBody(request: services_echo_echo_pb.SimpleMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_echo_echo_pb.SimpleMessage) => void): grpc.ClientUnaryCall;
    public echoDelete(request: services_echo_echo_pb.SimpleMessage, callback: (error: grpc.ServiceError | null, response: services_echo_echo_pb.SimpleMessage) => void): grpc.ClientUnaryCall;
    public echoDelete(request: services_echo_echo_pb.SimpleMessage, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_echo_echo_pb.SimpleMessage) => void): grpc.ClientUnaryCall;
    public echoDelete(request: services_echo_echo_pb.SimpleMessage, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_echo_echo_pb.SimpleMessage) => void): grpc.ClientUnaryCall;
    public echoPatch(request: services_echo_echo_pb.DynamicMessageUpdate, callback: (error: grpc.ServiceError | null, response: services_echo_echo_pb.DynamicMessageUpdate) => void): grpc.ClientUnaryCall;
    public echoPatch(request: services_echo_echo_pb.DynamicMessageUpdate, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_echo_echo_pb.DynamicMessageUpdate) => void): grpc.ClientUnaryCall;
    public echoPatch(request: services_echo_echo_pb.DynamicMessageUpdate, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_echo_echo_pb.DynamicMessageUpdate) => void): grpc.ClientUnaryCall;
}
