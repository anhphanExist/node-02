// server.js
var http = require("http");
var url = require("url");
var port = process.env.PORT;
var host = process.env.HOST;

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        var method = request.method;
        console.log("Request for " + method + " method received");

        request.setEncoding("utf8");
        request.addListener("data", function(postDataChunk) {

        });

        request.addListener("end", function() {
            route(handle, pathname, method, response);
        });
    }

    var server = http.createServer(onRequest);
    server.listen(port, host, () => {
        console.log(`Your port is ${port} on ${host}`);
    });
}


exports.start = start;