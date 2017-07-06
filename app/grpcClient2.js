// npm install -g grpc-tools

// grpc_tools_node_protoc --js_out=import_style=commonjs,binary:static_codegen/
// --grpc_out=static_codegen --plugin=protoc-gen-grpc=/Users/zhanglong/.nvm/versions/node/v6.3.1/bin/grpc_tools_node_protoc_plugin
// proto/StudentProto.proto

var service = require('../static_codegen/proto/StudentProto_grpc_pb');
var messages = require('../static_codegen/proto/StudentProto_pb');

var grpc = require('grpc');

var client = new service.StudentServiceClient('localhost:8899', grpc.credentials.createInsecure());

var request = new messages.MyRequest();
request.setUsername('wangwu');

client.getRealnameByUsername(request, function(error, respData) {
   console.log(respData.getRealname());
});