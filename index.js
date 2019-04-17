var server = require("./server");
var router = require("./router");
var requestHandlers = require("./requestHandlers");

var handle = {
    GET: requestHandlers.get,
    POST: requestHandlers.post,
    PUT: requestHandlers.put,
    DELETE: requestHandlers.del
}

server.start(router.route, handle);