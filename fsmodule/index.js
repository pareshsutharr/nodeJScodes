const fs = require('fs');

// fs.writeFileSync('index.txt',"fs write file module is using...");
// fs.writeFileSync('index.txt',"overwritting fs writefilesync module function.");
fs.appendFileSync('index.txt','this text come thorgh the fs append file system'); // not overridding the file data

let buf_data = fs.readFileSync('index.txt');

console.log(buf_data) // getting buffer byte data

let org_data = buf_data.toString();
console.log(org_data);

//to rename file name use fs.renameSync function

fs.renameSync('index.txt','data.txt'); // first argument is old file name second argument is new file name
fs.renameSync('data.txt','index.txt');

