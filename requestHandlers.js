
function get(response) {
    console.log("'GET' was called.");

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("world");
    response.end();
}

function post(response) {
    console.log("'POST' was called.");

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("world created");
    response.end();
}

function put(response) {
    console.log("'PUT' was called.");

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("world updated");
    response.end();
}

function del(response) {
    console.log("'DELETE' was called.");

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("world deleted");
    response.end();
}

exports.get = get;
exports.post = post;
exports.put = put;
exports.del = del;