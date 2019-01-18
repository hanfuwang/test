const fs=require('fs');
const promisify=require("fs").promisify;
const read=promisify(fs.readFile);
read('./promisify.js').then(data=>{
	console.log(data.toString());
}).catch(ex=>{
	console.log(ex);
});
//可以用es6的async await异步调用代替