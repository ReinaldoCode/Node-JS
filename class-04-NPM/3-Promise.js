//Promise

const firtPath =
  "/Users/reinaldoperez/Library/CloudStorage/GoogleDrive-rey.codeday@gmail.com/My Drive/Node-JS/subfolder/firts.txt";
const secondPath =
  "/Users/reinaldoperez/Library/CloudStorage/GoogleDrive-rey.codeday@gmail.com/My Drive/Node-JS/subfolder/second.txt";

const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile(firtPath, "utf8");
    const second = await readFile(secondPath, "utf8");
    console.log(first,second);
    await writeFile(
      "/Users/reinaldoperez/Library/CloudStorage/GoogleDrive-rey.codeday@gmail.com/My Drive/Node-JS/subfolder/NewFile.txt",
      "Testing the writing with await "
    );
  } catch (err) {
    console.log(err);
  }
};

start();

//Diferent way to use a primise without creating the Promise funtion
// const util = require("util");

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);


//this is creating a promise funtion 
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//       readFile(path, "utf8", (err, data) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(data);
//         }
//       });
//     });
//   };

// getText(firtPath)
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
