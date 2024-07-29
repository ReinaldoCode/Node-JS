//async methode
const firtPath = '/Users/reinaldoperez/Library/CloudStorage/GoogleDrive-rey.codeday@gmail.com/My Drive/Node-JS/subfolder/firts.txt'
const secondPath = '/Users/reinaldoperez/Library/CloudStorage/GoogleDrive-rey.codeday@gmail.com/My Drive/Node-JS/subfolder/second.txt'

const {readFile, writeFile} = require('fs');

readFile(firtPath,'utf8',(err, data) =>{
    if(err)throw err;
    console.log(data);
})