var fs = require('fs');
var path = require('path');


module.exports = function(dirName, ext, callback){
	var fixed_ext = '.' + ext;
	
	fs.readdir(dirName, function(err, list){
		if (err) return callback(err);
		//for(i=0; i<list.length; i++){
		if(list.substr(-(fixed_ext.length)) == fixed_ext){
			callback(null, list);
		}
		//}
	});
}










	