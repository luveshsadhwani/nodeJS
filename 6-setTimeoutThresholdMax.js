// the set timeout threshold and delay are declared. Here I am trying to emulate what is the maximum delay the poll is allowed to accept
// 

const timeoutScheduled = Date.now();
const threshold = 100; // ms
const timeDelayed = 60000 * 5; // time delayed

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
