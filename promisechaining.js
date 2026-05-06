const cart = ["pants", "kurta", "shoes"];

const promise = createOrder(cart);
promise
  .then(function (orderId) {
    proceedToPayment(orderId);
  })
  .then()
  .catch(); //catch is used for failure callback
function createOrder(card) {
  //resolve and reject are the functions provided by us to construct promises
  const pr = new Promise((resolve, reject) => {
    //createOrder
    if (somethingWrong) {
      const err = new Error("Something wrong");
      reject(err);
    }
    const orderId;
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}
