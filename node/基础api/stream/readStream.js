const fs=require('fs');
const rs=fs.createReadStream('./readStream.js');
rs.pipe(process.stdout)//pipe往哪里导，process.stdout往控制台导
