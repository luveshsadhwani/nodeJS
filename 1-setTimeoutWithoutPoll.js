// poll queue is empty, so it will wait 100ms before executing the handler
// set interval behaves the same way

setTimeout(() => {
  console.log("I am a timer");
}, 1000);
