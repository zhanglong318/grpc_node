var PROTO_FILE_PATH = '/Users/zhanglong/front_end/grpc_demo/proto/StudentProto.proto'

var grpc = require('grpc');
var grpcService = grpc.load(PROTO_FILE_PATH).com.shengsiyuan.grpc;

var client = new grpcService.StudentService('localhost:8899',
    grpc.credentials.createInsecure());

    client.getRealnameByUsername({username: 'lisi'}, function(error, respData) {
        console.error("error: " + error);
        console.info(respData)
    });


