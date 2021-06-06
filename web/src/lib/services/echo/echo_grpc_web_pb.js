/**
 * @fileoverview gRPC-Web generated client stub for goreact.echo
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_api_annotations_pb = require('../../google/api/annotations_pb.js')

var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js')

var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')
const proto = {};
proto.goreact = {};
proto.goreact.echo = require('./echo_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.goreact.echo.EchoServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.goreact.echo.EchoServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.goreact.echo.SimpleMessage,
 *   !proto.goreact.echo.SimpleMessage>}
 */
const methodDescriptor_EchoService_Echo = new grpc.web.MethodDescriptor(
  '/goreact.echo.EchoService/Echo',
  grpc.web.MethodType.UNARY,
  proto.goreact.echo.SimpleMessage,
  proto.goreact.echo.SimpleMessage,
  /**
   * @param {!proto.goreact.echo.SimpleMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.goreact.echo.SimpleMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.goreact.echo.SimpleMessage,
 *   !proto.goreact.echo.SimpleMessage>}
 */
const methodInfo_EchoService_Echo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.goreact.echo.SimpleMessage,
  /**
   * @param {!proto.goreact.echo.SimpleMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.goreact.echo.SimpleMessage.deserializeBinary
);


/**
 * @param {!proto.goreact.echo.SimpleMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.goreact.echo.SimpleMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.goreact.echo.SimpleMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.goreact.echo.EchoServiceClient.prototype.echo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/goreact.echo.EchoService/Echo',
      request,
      metadata || {},
      methodDescriptor_EchoService_Echo,
      callback);
};


/**
 * @param {!proto.goreact.echo.SimpleMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.goreact.echo.SimpleMessage>}
 *     Promise that resolves to the response
 */
proto.goreact.echo.EchoServicePromiseClient.prototype.echo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/goreact.echo.EchoService/Echo',
      request,
      metadata || {},
      methodDescriptor_EchoService_Echo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.goreact.echo.SimpleMessage,
 *   !proto.goreact.echo.SimpleMessage>}
 */
const methodDescriptor_EchoService_EchoBody = new grpc.web.MethodDescriptor(
  '/goreact.echo.EchoService/EchoBody',
  grpc.web.MethodType.UNARY,
  proto.goreact.echo.SimpleMessage,
  proto.goreact.echo.SimpleMessage,
  /**
   * @param {!proto.goreact.echo.SimpleMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.goreact.echo.SimpleMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.goreact.echo.SimpleMessage,
 *   !proto.goreact.echo.SimpleMessage>}
 */
const methodInfo_EchoService_EchoBody = new grpc.web.AbstractClientBase.MethodInfo(
  proto.goreact.echo.SimpleMessage,
  /**
   * @param {!proto.goreact.echo.SimpleMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.goreact.echo.SimpleMessage.deserializeBinary
);


/**
 * @param {!proto.goreact.echo.SimpleMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.goreact.echo.SimpleMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.goreact.echo.SimpleMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.goreact.echo.EchoServiceClient.prototype.echoBody =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/goreact.echo.EchoService/EchoBody',
      request,
      metadata || {},
      methodDescriptor_EchoService_EchoBody,
      callback);
};


/**
 * @param {!proto.goreact.echo.SimpleMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.goreact.echo.SimpleMessage>}
 *     Promise that resolves to the response
 */
proto.goreact.echo.EchoServicePromiseClient.prototype.echoBody =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/goreact.echo.EchoService/EchoBody',
      request,
      metadata || {},
      methodDescriptor_EchoService_EchoBody);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.goreact.echo.SimpleMessage,
 *   !proto.goreact.echo.SimpleMessage>}
 */
const methodDescriptor_EchoService_EchoDelete = new grpc.web.MethodDescriptor(
  '/goreact.echo.EchoService/EchoDelete',
  grpc.web.MethodType.UNARY,
  proto.goreact.echo.SimpleMessage,
  proto.goreact.echo.SimpleMessage,
  /**
   * @param {!proto.goreact.echo.SimpleMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.goreact.echo.SimpleMessage.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.goreact.echo.SimpleMessage,
 *   !proto.goreact.echo.SimpleMessage>}
 */
const methodInfo_EchoService_EchoDelete = new grpc.web.AbstractClientBase.MethodInfo(
  proto.goreact.echo.SimpleMessage,
  /**
   * @param {!proto.goreact.echo.SimpleMessage} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.goreact.echo.SimpleMessage.deserializeBinary
);


/**
 * @param {!proto.goreact.echo.SimpleMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.goreact.echo.SimpleMessage)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.goreact.echo.SimpleMessage>|undefined}
 *     The XHR Node Readable Stream
 */
proto.goreact.echo.EchoServiceClient.prototype.echoDelete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/goreact.echo.EchoService/EchoDelete',
      request,
      metadata || {},
      methodDescriptor_EchoService_EchoDelete,
      callback);
};


/**
 * @param {!proto.goreact.echo.SimpleMessage} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.goreact.echo.SimpleMessage>}
 *     Promise that resolves to the response
 */
proto.goreact.echo.EchoServicePromiseClient.prototype.echoDelete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/goreact.echo.EchoService/EchoDelete',
      request,
      metadata || {},
      methodDescriptor_EchoService_EchoDelete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.goreact.echo.DynamicMessageUpdate,
 *   !proto.goreact.echo.DynamicMessageUpdate>}
 */
const methodDescriptor_EchoService_EchoPatch = new grpc.web.MethodDescriptor(
  '/goreact.echo.EchoService/EchoPatch',
  grpc.web.MethodType.UNARY,
  proto.goreact.echo.DynamicMessageUpdate,
  proto.goreact.echo.DynamicMessageUpdate,
  /**
   * @param {!proto.goreact.echo.DynamicMessageUpdate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.goreact.echo.DynamicMessageUpdate.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.goreact.echo.DynamicMessageUpdate,
 *   !proto.goreact.echo.DynamicMessageUpdate>}
 */
const methodInfo_EchoService_EchoPatch = new grpc.web.AbstractClientBase.MethodInfo(
  proto.goreact.echo.DynamicMessageUpdate,
  /**
   * @param {!proto.goreact.echo.DynamicMessageUpdate} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.goreact.echo.DynamicMessageUpdate.deserializeBinary
);


/**
 * @param {!proto.goreact.echo.DynamicMessageUpdate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.goreact.echo.DynamicMessageUpdate)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.goreact.echo.DynamicMessageUpdate>|undefined}
 *     The XHR Node Readable Stream
 */
proto.goreact.echo.EchoServiceClient.prototype.echoPatch =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/goreact.echo.EchoService/EchoPatch',
      request,
      metadata || {},
      methodDescriptor_EchoService_EchoPatch,
      callback);
};


/**
 * @param {!proto.goreact.echo.DynamicMessageUpdate} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.goreact.echo.DynamicMessageUpdate>}
 *     Promise that resolves to the response
 */
proto.goreact.echo.EchoServicePromiseClient.prototype.echoPatch =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/goreact.echo.EchoService/EchoPatch',
      request,
      metadata || {},
      methodDescriptor_EchoService_EchoPatch);
};


module.exports = proto.goreact.echo;

