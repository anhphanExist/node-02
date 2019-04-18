// server.js
var http = require("http");
var url = require("url");
const port = process.env.PORT || 3000;
const host = process.env.HOST || "0.0.0.0";

function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        var method = request.method;

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