// poll queue is not empty, so it will exhaust the poll queue first
// when logAtPoll runs the 2nd time, after setInterval, it still gets called before setInterval

const logAtPoll = async () => {
  console.log("I will run first");
};

logAtPoll();

setInterval(() => {
  console.log("I am an interval");
}, 1000);

logAtPoll();
