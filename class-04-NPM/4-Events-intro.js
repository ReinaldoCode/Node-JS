//Events
//Intro to events and use the event is a class an is usually use with the name EventEmitter
const EventEmitter = require("events");

const customEvent = new EventEmitter();

customEvent.on("response", (name, age) => {
  console.log(`data recieved with name ${name} and age ${age}`);
});
customEvent.on("response", () => {
  console.log("other log");
});
customEvent.prependListener('response', (name) => console.log(name));

customEvent.emit("response", 'Reinaldo', 26);
