var sum = 0;
//console.log('length de process argv: ' + process.argv.length);

for(i=2; i<process.argv.length; i++){
	sum = sum + Number(process.argv[i]);
}

console.log(sum);
//return sum;
