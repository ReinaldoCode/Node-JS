const { writeFileSync } = require("fs");
const path =
  "/Users/reinaldoperez/Library/CloudStorage/GoogleDrive-rey.codeday@gmail.com/My Drive/Node-JS/subfolder/SecondBig.txt";

for (var i = 0; i < 1000; i++) {
  writeFileSync(path, `Hello ${i}.`, { flag: "a" });
}
