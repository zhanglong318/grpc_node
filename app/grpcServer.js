var PROTO_FILE_PATH = '/Users/zhanglong/front_end/grpc_demo/proto/StudentProto.proto'

var grpc = require('grpc');
var grpcService = grpc.load(PROTO_FILE_PATH).com.shengsiyuan.grpc;

var server = new grpc.Server();
server.addService(grpcService.StudentService.service, {
    getRealnameByUsername: getRealnameByUsername,
    getStudentsByAge: getStudentsByAge,
    getStudentsWrapperByAges: getStudentsWrapperByAges,
    biTalk: biTalk
});
server.bind("localhost:8899", grpc.ServerCredentials.createInsecure());

server.start();


function getRealnameByUsername(call, callback) {
    console.log(call)
    console.log('username: ' + call.request.username);
    callback(null, {realname: '张三'});
}

function getStudentsByAge() {

}

function getStudentsWrapperByAges() {

}

function biTalk() {

}