const ctof = function(temp) {
  let convTemp = (temp * (9/5)) + 32;
  return Math.round(convTemp * 10) / 10
};

const ftoc = function(temp) {
  let convTemp = (temp - 32) / (9/5);
  return Math.round(convTemp * 10) / 10
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
