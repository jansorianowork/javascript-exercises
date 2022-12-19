const repeatString = function(stringVal,multiplier) {
      var stringValue = ""
      var stringholder = stringVal

      if (multiplier === 0){
        return ""
      }

      if (multiplier < 0){
        return "ERROR"
      }
    for (let i = 0; i < multiplier; i++) {
      stringValue = stringValue.concat(stringholder)
      }
      return stringValue



};

// Do not edit below this line
module.exports = repeatString;
