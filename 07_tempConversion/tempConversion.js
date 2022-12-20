const convertToCelsius = function(valFarenheit) {
  //compute using the formula for Farenheit to Celius
  var convertedToFarenheit = (valFarenheit - 32) * .5556

  //convert to only accept 1 decimal
  var convertToFahrenheitToOneDec = convertedToFarenheit.toFixed(1)
  //convert from string to number since tofixed returns string
  var convertedToFarenheitParse = parseFloat(convertToFahrenheitToOneDec)

  return convertedToFarenheitParse
};

const convertToFahrenheit = function(valCelcius) {
//compute using the formula for Celius to Farenheit
  var convertedToCelcius = (valCelcius * 1.8) + 32


  //convert to only accept 1 decimal
  var convertToCelciusToOneDec = convertedToCelcius.toFixed(1)


    //convert from string to number since tofixed returns string

  var convertedToCelciusParse = parseFloat(convertToCelciusToOneDec)

  return convertedToCelciusParse

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
