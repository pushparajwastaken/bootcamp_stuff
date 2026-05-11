//suppose if we have to make parallel api calls
Promise.all([p1, p2, p3])
  //used to handle multiple of api calls
  //takes in an array of api calls

  // if all of the apis are success, the output will be an array with the result of all promises
 [ val1,  val2,  val3,]
//it will wait for all of the apis to finish and then give the result
//the api calls will be made parallely \

//if any of the promise get rejected, then it will throw an error as soon as it gets an error,it will not wait for other promises