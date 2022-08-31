// there is also a few ms taken of startup (even without anything queued to the evnet)
// the amount of ms varies, as this depends on operating system scheduling


const timeoutScheduled = Date.now();

setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);
}, 100);
