// Write a TCP time server!

// Your server should listen to TCP connections on the port provided by the first argument to your program. For each connection you must write the current date & 24 hour time in the format:

//     "YYYY-MM-DD hh:mm"

// followed by a newline character. Month, day, hour and minute must be zero-filled to 2 integers. For example:

//     "2013-07-06 17:42

var port = process.argv[2]


var net = require('net');

var server = net.createServer(function(socket){
//returns an instance of server
//The callback socket contains a lot of meta-data regarding the connection, but it is also a Node duplex Stream, in that it can be both read from and written to.
	var time = new Date();
	var year = time.getFullYear().toString();
	var month = time.getMonth()+1;
	month = month.toString();
	var date = time.getDate().toString();
	var hours = time.getHours().toString();
	var minutes = time.getMinutes().toString();
	time = year+'-'+month+'-'+date+' '+hours+':'+minutes+'\n';

	socket.write(time);
	socket.end();

});

server.listen(port);
