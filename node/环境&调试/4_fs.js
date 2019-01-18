//系统内置模块
const fs=require("fs");
const result=fs.readFile("./4_fs.js",(err,data)=>{
	if(err){
		console.log(err)
	}else{
		console.log(data.toString())
	}
})
