
function get(response) {

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("world");
    response.end();
}

function post(response) {

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("world created");
    response.end();
}

function put(response) {

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("world updated");
    response.end();
}

function del(response) {

    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("world deleted");
    response.end();
}

exports.get = get;
exports.post = post;
exports.put = put;
exports.del = del;