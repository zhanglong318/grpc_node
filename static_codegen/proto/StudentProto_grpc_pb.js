// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_StudentProto_pb = require('../proto/StudentProto_pb.js');

function serialize_com_shengsiyuan_grpc_MyRequest(arg) {
  if (!(arg instanceof proto_StudentProto_pb.MyRequest)) {
    throw new Error('Expected argument of type com.shengsiyuan.grpc.MyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_shengsiyuan_grpc_MyRequest(buffer_arg) {
  return proto_StudentProto_pb.MyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_shengsiyuan_grpc_MyResponse(arg) {
  if (!(arg instanceof proto_StudentProto_pb.MyResponse)) {
    throw new Error('Expected argument of type com.shengsiyuan.grpc.MyResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_shengsiyuan_grpc_MyResponse(buffer_arg) {
  return proto_StudentProto_pb.MyResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_shengsiyuan_grpc_StreamRequest(arg) {
  if (!(arg instanceof proto_StudentProto_pb.StreamRequest)) {
    throw new Error('Expected argument of type com.shengsiyuan.grpc.StreamRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_shengsiyuan_grpc_StreamRequest(buffer_arg) {
  return proto_StudentProto_pb.StreamRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_shengsiyuan_grpc_StreamResponse(arg) {
  if (!(arg instanceof proto_StudentProto_pb.StreamResponse)) {
    throw new Error('Expected argument of type com.shengsiyuan.grpc.StreamResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_shengsiyuan_grpc_StreamResponse(buffer_arg) {
  return proto_StudentProto_pb.StreamResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_shengsiyuan_grpc_StudentRequest(arg) {
  if (!(arg instanceof proto_StudentProto_pb.StudentRequest)) {
    throw new Error('Expected argument of type com.shengsiyuan.grpc.StudentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_shengsiyuan_grpc_StudentRequest(buffer_arg) {
  return proto_StudentProto_pb.StudentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_shengsiyuan_grpc_StudentResponse(arg) {
  if (!(arg instanceof proto_StudentProto_pb.StudentResponse)) {
    throw new Error('Expected argument of type com.shengsiyuan.grpc.StudentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_shengsiyuan_grpc_StudentResponse(buffer_arg) {
  return proto_StudentProto_pb.StudentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_shengsiyuan_grpc_StudentResponseList(arg) {
  if (!(arg instanceof proto_StudentProto_pb.StudentResponseList)) {
    throw new Error('Expected argument of type com.shengsiyuan.grpc.StudentResponseList');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_com_shengsiyuan_grpc_StudentResponseList(buffer_arg) {
  return proto_StudentProto_pb.StudentResponseList.deserializeBinary(new Uint8Array(buffer_arg));
}


var StudentServiceService = exports.StudentServiceService = {
  getRealnameByUsername: {
    path: '/com.shengsiyuan.grpc.StudentService/GetRealnameByUsername',
    requestStream: false,
    responseStream: false,
    requestType: proto_StudentProto_pb.MyRequest,
    responseType: proto_StudentProto_pb.MyResponse,
    requestSerialize: serialize_com_shengsiyuan_grpc_MyRequest,
    requestDeserialize: deserialize_com_shengsiyuan_grpc_MyRequest,
    responseSerialize: serialize_com_shengsiyuan_grpc_MyResponse,
    responseDeserialize: deserialize_com_shengsiyuan_grpc_MyResponse,
  },
  getStudentsByAge: {
    path: '/com.shengsiyuan.grpc.StudentService/GetStudentsByAge',
    requestStream: false,
    responseStream: true,
    requestType: proto_StudentProto_pb.StudentRequest,
    responseType: proto_StudentProto_pb.StudentResponse,
    requestSerialize: serialize_com_shengsiyuan_grpc_StudentRequest,
    requestDeserialize: deserialize_com_shengsiyuan_grpc_StudentRequest,
    responseSerialize: serialize_com_shengsiyuan_grpc_StudentResponse,
    responseDeserialize: deserialize_com_shengsiyuan_grpc_StudentResponse,
  },
  getStudentsWrapperByAges: {
    path: '/com.shengsiyuan.grpc.StudentService/GetStudentsWrapperByAges',
    requestStream: true,
    responseStream: false,
    requestType: proto_StudentProto_pb.StudentRequest,
    responseType: proto_StudentProto_pb.StudentResponseList,
    requestSerialize: serialize_com_shengsiyuan_grpc_StudentRequest,
    requestDeserialize: deserialize_com_shengsiyuan_grpc_StudentRequest,
    responseSerialize: serialize_com_shengsiyuan_grpc_StudentResponseList,
    responseDeserialize: deserialize_com_shengsiyuan_grpc_StudentResponseList,
  },
  biTalk: {
    path: '/com.shengsiyuan.grpc.StudentService/BiTalk',
    requestStream: true,
    responseStream: true,
    requestType: proto_StudentProto_pb.StreamRequest,
    responseType: proto_StudentProto_pb.StreamResponse,
    requestSerialize: serialize_com_shengsiyuan_grpc_StreamRequest,
    requestDeserialize: deserialize_com_shengsiyuan_grpc_StreamRequest,
    responseSerialize: serialize_com_shengsiyuan_grpc_StreamResponse,
    responseDeserialize: deserialize_com_shengsiyuan_grpc_StreamResponse,
  },
};

exports.StudentServiceClient = grpc.makeGenericClientConstructor(StudentServiceService);
