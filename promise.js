const cart = ["pants", "kurta", "shoes"];

// createOrder(card, function (orderId) {
//   proceedToPayment(orderId);
// }); //returns orderId

// const promise = await createOrder(cart);
// //promise is nothing but empty order {data:undefined}-- promise is an object representing the eventual completion of a async operation
// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });
// 3 States:- pending,fulfilled,rejected
const user = fetch("https://api.github.com/users/pushparajwastaken");

//console.log(user)
user
  .then(function (data) {
    console.log(data);
    return;
  })
  .then(function () {
    return;
  })
  .then(() => {});
