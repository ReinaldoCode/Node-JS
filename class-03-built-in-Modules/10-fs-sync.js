//Sync methode
const firtPath = '/Users/reinaldoperez/Library/CloudStorage/GoogleDrive-rey.codeday@gmail.com/My Drive/Node-JS/subfolder/firts.txt'
const secondPath = '/Users/reinaldoperez/Library/CloudStorage/GoogleDrive-rey.codeday@gmail.com/My Drive/Node-JS/subfolder/second.txt'
const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync( firtPath,'utf8');
console.log(first);

const second = readFileSync( secondPath , 'utf-8');
console.log(second);

writeFileSync ('/Users/reinaldoperez/Library/CloudStorage/GoogleDrive-rey.codeday@gmail.com/My Drive/Node-JS/subfolder/Changed-test-2.txt', 'Testing overwriteting the file');
