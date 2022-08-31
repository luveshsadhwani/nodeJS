// The setImmediate API is an API that runs in the checking phase
// The poll phase is run to exhaustion before first
// Once the polling phase has ended, it will prioritize any timers that need to be run

// note the following scenarios
// threshold = 200, timedelayed = 10s
// this means the async function runs for 210 seconds
// the async function will always run first, because there are no due timers
// once the polling phase is empty, it notices the timers threshold has been passed and will run the timer first
// after this is run, the polling phase is still empty, thus it will enter the checking phase

// output
// I have delayed the timeout
// 215ms have passed since I was scheduled (natural delays in operating system)
// I am more important than a timer

// alternate scenario
// threshold = 200, timedelayed = -10s
// this means the async function runs for 190 seconds
// the async function will run first, as there are no due timers
// after execution, the polling phase is empty. It notices the threshold is not reached and will exit the poll phase to the checking phase

// output
// I have delayed the timeout
// I am more important than a timer
// 207ms have passed since I was scheduled

// if there is no threshold for the timer, the order between setTimeout and setImmediate is non-deterministic UNLESS they are within a single I/O cycle
// adding a threshold will always make the timeout execute after (since the poll phase is empty)

const timeoutScheduled = Date.now();
const threshold = 10; // ms
const timeDelayed = 0; // time delayed

setImmediate(() => {
  console.log(`I am more important than a timer`);
});

setTimeout(() => {
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
