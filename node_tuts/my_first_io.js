var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
var file = buffer.toString();
var words = file.split('\n');
//console.log(words);

var result = words.length-1;
console.log(result);