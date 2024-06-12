//create a file and name it bio.txt and put text on it
//add more data to the file at the end of the file 
//read data without getting the buffer data at first 
//rename the file name to mybio.txt
//delete both file

// step 1 
//including fs node module 
//by using require method
const fs = require('fs');

//step 2
//creating the file and put text on it
fs.writeFileSync('bio.txt','Name : Paresh suthar');
fs.appendFileSync('bio.txt','\nage : 20');

//step 3
//read data without getting buffer data
fs.readFile('bio.txt','utf8',function(err,data){
    console.log(data)
});

//step 4 
//rename the bio.txt file to mybio.txt
fs.renameSync('bio.txt','mybio.txt');

//step 5 
//delete both file
// fs.unlinkSync('mybio.txt');
