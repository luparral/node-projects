var fs = require("fs");
var path = require("path");

module.exports = function(dirname,extension,callback){
    //primero que nada se llama a esta funcion, asi que entra por aca.
    var list = [];

    fs.readdir(dirname, function(err,files){
    	//aca recibe el arreglo de files que estan en dirname.
        if(err){
        	//como hubo error devuelve el callback con tal error.
            return callback(err);
        }
        else{
            extension = '.' + extension
            files.forEach(function(fileName){
            	//con cada file, se fija si cumplen la condicion y de ser asi lo agrega al arreglo list.
                if(path.extname(fileName) === extension){
                    list.push(fileName);
                }
            })
        }
        //devuelve el arreglo list formado con el callback.
        return callback(null,list);
    })
};