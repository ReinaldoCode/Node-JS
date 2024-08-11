//Streams 

const path = '/Users/reinaldoperez/Library/CloudStorage/GoogleDrive-rey.codeday@gmail.com/My Drive/Node-JS/subfolder/BigInt.txt';

const {createReadStream} = require('fs');

const stream = createReadStream(path);

stream.on('data',(result) =>{
    console.log(result);
})