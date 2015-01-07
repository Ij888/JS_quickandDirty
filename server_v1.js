//server
var http = require('http');
var server = http.createServer(function (request, response){
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.end("127-27017");
});

server.listen(8000);
console.log("the server is running at localhost:8000");