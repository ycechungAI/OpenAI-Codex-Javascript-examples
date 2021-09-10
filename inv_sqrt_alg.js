/* write a quake fast inverse square root algorithm */
var inverseSquareRoot = function(x) {
  var xhalf = 0.5 * x;
  var i = x;
  i = 0x5f3759df - (i >> 1);
  x = i * (1.5 - (xhalf * i * i));
  return 1 / x;
};
console.log(inverseSquareRoot(4));
