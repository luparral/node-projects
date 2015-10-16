var http = require('http')
var bl = require('bl')


var url1 = process.argv[2]
var url2 = process.argv[3]
var url3 = process.argv[4]

http.get(url1, function(response){
	response.pipe(bl(function(err, data1){
		if (err) return console.error(data1);
		//'data' is a complete Buffer object containing the full data.
		data1 = data1.toString();
		//console.log('data1');
		console.log(data1);
		http.get(url2, function(response){
			response.pipe(bl(function(err, data2){
				if(err) return console.error(data2);
				data2 = data2.toString();
				//console.log('data2');
				console.log(data2);
				http.get(url3, function(response){
					response.pipe(bl(function(err, data3){
					if(err) return console.error(data3);
					data3 = data3.toString();
					//console.log('data3');
					console.log(data3);
					}))
				})
			}))
		})
	}))
})