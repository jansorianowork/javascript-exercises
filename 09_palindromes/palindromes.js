const palindromes = function (str) {
    //   use the RegExp to remove unwanted characters from it
    //  [ and ] are the start and end of a character set.
    // \W means "non-word", as opposed to \w which will match a word.
    // _ is the "_" character.
    // / mark the beginning and end of a regular expression.
    // g means it's a global search.
    const re = /[\W_]/g;
    //Lowercase the string
    const lowRegStr = str.toLowerCase().replace(re, '');
    //reversing the string
    const reverseStr = lowRegStr.split('').reverse().join(''); 
    // Check if reverseStr is strictly equals to lowRegStr 
    return reverseStr === lowRegStr;
};

// Do not edit below this line
module.exports = palindromes;
