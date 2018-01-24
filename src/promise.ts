const example = new Promise<number>((resolve, reject) => {
  // resolve(123);
  reject(new Error('failed'));
});

example.then(value => {
  console.log('then', value);
});

example.catch(error => {
  console.log('catch', error);
});
