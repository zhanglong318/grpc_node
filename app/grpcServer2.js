var service = require('../static_codegen/proto/StudentProto_grpc_pb');
var messages = require('../static_codegen/proto/StudentProto_pb');

var grpc = require('grpc');

var server = new grpc.Server();

server.addService(service.StudentServiceService, {
    getRealnameByUsername: getRealnameByUsername,
    getStudentsByAge: getStudentsByAge,
    getStudentsWrapperByAges: getStudentsWrapperByAges,
    biTalk: biTalk
});

server.bind('localhost:8899', grpc.ServerCredentials.createInsecure());
server.start();


function getRealnameByUsername(call, callback) {
    console.log("call: " + call);
    console.log('request: ' + call.request.getUsername());
    var myResponse = new messages.MyResponse();
    myResponse.setRealname("赵六");

    callback(null, myResponse);
}

function getStudentsByAge() {

}

function getStudentsWrapperByAges() {

}

function biTalk() {

}