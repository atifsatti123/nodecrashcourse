const http = require('http');
const data = require('./data');
// console.log("code step by step")
// console.log(100+20)

http.createServer((req,resp) => {
    resp.writeHead(200, {'Content-Type':' application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}).listen(8000);

const fs = require('fs');
fs.writeFileSync('apple.txt', 'this is a apple file');

const { dir } = require('console');
const fs = require('fs');
const path = require('path');
const dirPath = path.join (__dirname,'files');
for(i=0;i<5; i++)
{
    fs.writeFileSync(dirPath+"/hello"+i+".txt", "a simple text file");
}

//how to create file read //

fs.readdir(dirPath,(err,files) => {
    console.log(files)
})

//single file  show //

fs.readdir(dirPath,(err,files) => {
    files.forEach((item)=> {
     console.log('file name is ',item)
    })
})

// how to create crud file in node js //

