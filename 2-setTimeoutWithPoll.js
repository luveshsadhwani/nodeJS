// poll queue is not empty, so it will exhaust the poll queue first
// when logAtPoll runs the 2nd time, after setTimeout, it still gets called before setTimeout

const logAtPoll = async () => {
  console.log("I will run first");
};

logAtPoll();

setTimeout(() => {
  console.log("I am a timer");
}, 1000);

logAtPoll();
