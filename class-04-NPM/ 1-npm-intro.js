// npm local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm i -g <packageName>
// sudo npm i -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)
// folder node_modules should be on gitignore

const _ = require('lodash');

const items = [1,[2,[3,[4]]]];

const newItems = _.flattenDeep(items);
console.log(newItems);