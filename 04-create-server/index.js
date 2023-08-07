const http = require('http');

let requestCounter = 0;

const server = http.createServer((request, response) => {
    requestCounter++;

    switch (request.url) {
        case '/':
            response.write('main page');
            break;
        case '/students':
            response.write('students ');
            break;
        case '/courses':
            response.write('back + front ');
            break;
        default:
            response.write('error 404 ');
    }
    response.write(' request count: ' + requestCounter);
    response.end();
});

server.listen(3003);
