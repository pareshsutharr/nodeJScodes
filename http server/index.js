const http = require('http');
const fs = require('fs');

const server = http.createServer((request,response)=>{

    const data = fs.readFileSync(`${__dirname}/SimpleApi/userapi.json` , "utf-8");
    const jsondata = JSON.parse(data);


    if(request.url == "/"){
        response.end("server is created....");
    }
    else if(request.url == "/contact"){
        response.end("contact page open");
    }
    else if(request.url == "/about"){
        response.end("about page open");
    }
    else if(request.url == "/userapi"){
        response.writeHead(200,{"Content-type" : "application/json"});
        response.end(data);
    }
    else {
        response.writeHead(404,{"Content-type" : "text/html"});
        response.end("404 PAGE NOT FOUND");
    }
});

server.listen(3000,"127.0.0.1",()=>{
    console.log(`your server is running no http://127.0.0.1:3000`);
}) 