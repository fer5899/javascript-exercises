const ftoc = function ftoc(farenheit) {

  celsius = (farenheit - 32) / 1.8;
  return parseFloat(celsius.toFixed(1));

};

const ctof = function ctof(celsius) {

  farenheit = (celsius * 1.8) + 32;
  return parseFloat(farenheit.toFixed(1));

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
