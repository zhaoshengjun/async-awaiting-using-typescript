new Promise((res, rej) => {
  res(123);
})
  .then(res => {
    console.log(res);
    return new Error('failed in second');
    // return 456;
  })
  .then(res => {
    console.log(res);
    return 789;
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log('ERROR', err.message);
  });
