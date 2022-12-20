const sumAll = function(firstNum, secondNum) {
    const biggerNum = firstNum > secondNum ? firstNum:secondNum
    //handle errors for negative numbers
    if (firstNum <= 0 || secondNum <=0){
        return "ERROR"
    }
    //handle errors for non-number parameters
    if (typeof biggerNum != 'number'){
        return "ERROR"
    }
    //total value handler
    var sumCounter = 0
    for ( var i = 0; i <= biggerNum ;i++){
        //loop through the biggest number
        sumCounter += i
        //add 1 every loop
    }

    return sumCounter
};

// Do not edit below this line
module.exports = sumAll;
