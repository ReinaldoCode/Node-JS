const os = require("os");

//info about current user
// const user = os.userInfo();

// console.log(user);

//method returns the system uptime in seconds

// console.log(`the System Uptime is ${os.uptime}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMen: os.totalmem(),
  freeMen: os.freemem(),
};

console.log(currentOS);
