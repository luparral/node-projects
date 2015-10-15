var fileReader = require('./fileReader');

var path = require('path');

var ext = process.argv[3];
var dirName = process.argv[2];


fileReader(dirName, ext, function(err, list){ //a file reader le estoy pasando la lista 
	if(err) throw err;
	// list.forEach(function(file){
	// 	console.log(file);
	// });
	for (i=0;i<list.length;i++){
		console.log(list[i]);
	}
});