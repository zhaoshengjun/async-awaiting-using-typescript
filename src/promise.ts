const first = new Promise((resolve, reject) => {
  resolve(123);
});

const second = first.then(val => {
  // body function of second
  return val;
});

console.log(first === second);
