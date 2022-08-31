// Running a async function longer than the set timeout threshold will cause set timeout to delay.

// the set timeout threshold has been set to 100ms, however the delayed async function takes 200ms. The setTimeout will still need to wait for this delayed async to finish

const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);

const delayedAsync = async () => {
  const startCallback = Date.now();

  // do something that will take 10ms...
  while (Date.now() - startCallback < 200) {
    // do nothing
  }

  console.log("I have delayed the timeout");
};

delayedAsync();
