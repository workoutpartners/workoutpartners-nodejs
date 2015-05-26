var http = require('http')

HOST = 'workout.partners.dev';
PORT = 3000;

var process_request = function process_request(request, response) {
	response.end('Welcome to Workout Partners!')
}

var server_started = function server_started() {
	url = 'http://' + HOST + ':' + PORT + "/"
	console.log('server started at ' + url)
}

server = http.createServer(process_request)
server.listen(PORT, server_started)
