import Promise from '../dist/jquery.promise';

// Promise.resolve().then(() => console.log('resolved 1'));

// Promise.reject().then(
//   () => console.log('resolved 2'),
//   () => console.log('rejected 2')
// );

const promise1s = new Promise(resolve => {
  setTimeout(resolve, 1000);
});
promise1s.then(() => console.log('1s'));

const promise2s = new Promise((resolve, reject) => {
  setTimeout(reject, 2000);
});

const promise3s = new Promise(resolve => {
  setTimeout(resolve, 3000);
});
promise3s.then(() => console.log('3s'));

Promise.all([promise1s, promise2s, promise3s]).then(
  () => console.log('all resolved'),
  () => console.log('rejected')
);
