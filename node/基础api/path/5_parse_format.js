const {parse,format}=require('path');
const filePath="path/api.text";
const ret=parse(filePath);//返回一个对象，是路径的相关信息
const retTwo=format(ret);//将一个对象格式化为一个路径字符串
console.log(ret);
console.log(retTwo);