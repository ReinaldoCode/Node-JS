// Event Loop
const firtPath = "/Users/reinaldoperez/Library/CloudStorage/GoogleDrive-rey.codeday@gmail.com/My Drive/Node-JS/subfolder/firts.txt";
const { readFile } = require("fs");

console.log("started a first task");

readFile(firtPath, "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("completed first task");
});
console.log("starting next task"); 
