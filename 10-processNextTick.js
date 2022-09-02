// process next tick allows code to be executed within the same phase of the event loop, but after the rest of the users code has run
// this is useful if we have any synchronous code within async functions. what we should be doing is running these synchronous operations after
// the rest of the code has been run - maintaining its async behaviour

let a, b;

const asyncFn = async () => console.log(`async but actually: ${a + b}`);

asyncFn();

a = 1;
b = 1;
console.log(`sync, so i am correct: ${a + b}`);

// to fix this, we should use process next tick to allow a and b to be declared first

let c, d;

const asynFnCorrect = () =>
  process.nextTick(() => console.log(`im really async: ${c + d}`));

asynFnCorrect();

c = 2;
d = 2;
console.log(`sync, not the only one correct: ${c + d}`);
