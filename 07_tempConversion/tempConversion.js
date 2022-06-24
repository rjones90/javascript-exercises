const ftoc = function(temperature) {
  celsius = (temperature -32) * .5556;
return celsius = parseFloat(celsius.toFixed(1));
};

const ctof = function(temperature) {
  fahrenheit = (temperature * 1.8) + 32;
return fahrenheit = parseFloat(fahrenheit.toFixed(1));
};


// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
