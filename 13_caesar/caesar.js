const caesar = function(message, shift) {
    if (shift < 0) {
        shift = 26 + (shift % 26);
      }
      return message
        .split("") //splits it into an array
        .map(message => {
             //does the following to each element in the array
          normalStr = String.fromCharCode(message.charCodeAt())
          console.log(normalStr)
          prePoint = message.charCodeAt() //gets the charcode of element  
          //if/else checks to see if upper or lower case
          if (prePoint >= 65 && prePoint <= 90) { //upper case
            return String.fromCharCode(((prePoint - 65 + shift) % 26) + 65);
          } else if (prePoint >= 97 && prePoint <= 122) { //lower case
            return String.fromCharCode(((prePoint - 97 + shift) % 26) + 97)
          } else {
            return normalStr;
          }
        })
        .join("");

};

// Do not edit below this line
module.exports = caesar;
