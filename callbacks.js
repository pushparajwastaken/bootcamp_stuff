const cart = ["pants", "kurta", "shoes"];

//callback hell
api.createOrder(cart, function () {
  api.proceedtoPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet();
    });
  });
});

//inversion of control-losing control of program while using callback
