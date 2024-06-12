const fs = require('fs');

const biodata = {
    "name" : "paresh sutharr",
    "age" : 19,
    "ytname" : "lws",
    "disability" : false,
    "isemployed" : 10000
}

// console.log(biodata);

// const jsondata = JSON.stringify(biodata);

// console.log(jsondata);

// const parsedata = JSON.parse(jsondata);

// console.log(parsedata.name);
const normaldata = JSON.stringify(biodata);
// fs.writeFile("data.json",normaldata,()=>{
//     console.log("done");
// })


fs.readFile("data.json","utf-8",(err,data)=>{
    console.log(data);
    const jsondata = JSON.parse(data);
    console.log(jsondata.name);
    console.log(jsondata);
});
