const http = require('http');
 const fileSystem = require('fs');
const server = http.createServer((req,res)=>{
    const htmlFile = fileSystem.readFileSync('index.html')
    console.log('inside callback from create server');
    res.end(htmlFile);
});
// Write your code here
server.listen(3001,()=>{
    console.log("my server is running on 3001 port");
    
});
