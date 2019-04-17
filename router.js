function route(handle, pathname, method, response) {
    if (typeof handle[method] === 'function' && pathname === '/hello') {
        handle[method](response);
    }
    else {
        response.writeHead(404, {"Content-Type": "text/plain"});
        response.write("404 Not Found");
        response.end();
    }
}

exports.route = route;