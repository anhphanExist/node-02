function route(handle, pathname, method, response) {
    console.log(`About to route a ${method} request`);
    if (typeof handle[method] === 'function' && pathname === '/hello') {
        handle[method](response);
    }
    else {
        console.log("No request handler found");
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not Found");
        response.end();
    }
}

exports.route = route;