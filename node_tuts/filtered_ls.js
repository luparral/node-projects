var fs = require('fs');
var path = require('path');

var ext = '.' + process.argv[3];

fs.readdir(process.argv[2], function(err, list){
	if (err) throw err;
		for(i=0; i<list.length; i++){
		if(list[i].substr(-(ext.length)) == ext){
			console.log(list[i]);
		}
	}
});

