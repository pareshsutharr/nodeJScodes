const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on("request",(req,res)=>{
    // var fs = require("fs")
    // fs.readFile("input.txt",'utf-8',(err,data)=>{
    //     res.end(data.toString());
    // })
    //second way to stream

    // const rstream = fs.createReadStream("input.txt");     //creating readable stream function
    // rstream.on("data" ,(chunkdata)=>{
    //     res.write(chunkdata);        
    // }); //if data is available it reades
    // rstream.on("end",()=>{
    //     res.end();
    // })
    // rstream.on("error" ,(err)=>{
    //    console.log(err);
    //    res.end("file not found");
    // })

    //third way

    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);
})

server.listen(3000,"127.0.0.1",()=>{
    console.log(`your server is running on http://127.0.0.1:3000`);
})