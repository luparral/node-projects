var fs = require('fs');

fs.readFile(process.argv[2], function(err, data){
	if(err) throw err;
	
	var file = data.toString();
	var words = file.split('\n');
	//console.log(words);

	var result = words.length-1;
	console.log(result);	
});
