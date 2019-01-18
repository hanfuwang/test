const {basename,dirname,extname}=require("path");
const filePath='/path/api.txt';

console.log(basename(filePath))//api.txt(文件名)

console.log(dirname(filePath))///path(文件所在文件夹名)

console.log(extname(filePath))//.txt(文件拓展名)
