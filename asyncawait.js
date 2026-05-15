const p = new Promise((res, rej) => {
  res("Promise resolved");
});

//always returns a promise
async function getData() {
  return p;
}
const dat = getData();
console.log(dat);

dat.then((res) => console.log(res));



