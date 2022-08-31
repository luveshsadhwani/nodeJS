// The poll phase is run to exhaustion before checking if there are any timers. Here, even if delayedAsync takes 1000ms to execute once, eventhough
// it is past the setInterval threshold, the poll phase still continues. 

const timeoutScheduled = Date.now();
const threshold = 100; // ms
const timeDelayed = 1000; // time delayed

setInterval(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, threshold);

const delayedAsync = async () => {
  const startCallback = Date.now();

  // do something that will take 10ms...
  while (Date.now() - startCallback < threshold + timeDelayed) {
    // do nothing
  }

  console.log("I have delayed the timeout");
};

delayedAsync();
delayedAsync();