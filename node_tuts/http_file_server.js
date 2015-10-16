// HTTP FILE SERVER

// Write an HTTP server that serves the same text file for each request it receives.

// Your server should listen on the port provided by the first argument to your program.

// You will be provided with the location of the file to serve as the second command-line argument. You must use the fs.createReadStream() method to stream the file contents to the response.

var http = require('http');
var fs = require('fs');
var port = process.argv[2];
var file = process.argv[3];

var server = http.createServer(function(request, response){
	//request fetch properties, such as header and query-string from the request
	//response sends data to the client, both headers and body.
	//both node and request are Node streams, and can be used to send and receive data.
	var readStream = fs.createReadStream(file);
	readStream.pipe(response);
});

server.listen(port);


