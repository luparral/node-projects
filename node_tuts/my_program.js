var filemodule = require("./my_module.js");

var dir = process.argv[2];
var ext = process.argv[3];

filemodule(dir,ext,function(err,files){
    //aca ya tiene los files pasados en list, es decir, los que cumplen la condición de filtrado
    if(err){
        throw new Error("Error");
    }
    else{
        for(var i = 0; i < files.length; i++){
        	//finalmente, itero sobre el arreglo de files que cumplen la condicion y voy mostrando de a uno a la vez.
            console.log(files[i]);
        }
    };
});