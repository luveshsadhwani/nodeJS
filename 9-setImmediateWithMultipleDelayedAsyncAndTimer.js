// The setImmediate API is an API that runs in the checking phase
// The poll phase is run to exhaustion before first
// Once the polling phase has ended, it will prioritize any timers that need to be run
// Note that it prioritizes exhausting the polling phase and then the due timers, even if it is pass the timer threshold

const timeoutScheduled = Date.now();
const threshold = 200; // ms
const timeDelayed = 200; // time delayed

setImmediate(() => {
  console.log(`I am more important than a timer`);
});

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
