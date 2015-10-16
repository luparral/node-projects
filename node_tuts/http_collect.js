var http = require('http')
var bl = require('bl')


var url = process.argv[2]

http.get(url, function(response){
	response.pipe(bl(function(err, data){
		if (err) return console.error(data);
		//'data' is a complete Buffer object containing the full data.
		data = data.toString();
		console.log(data.length);
		console.log(data);
	}))
})