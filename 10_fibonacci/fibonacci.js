const fibonacci = function(fibNum) {
    if (Math.sign(fibNum) === -1){
     
      return sumOfFib = "OOPS"
    }else{
    
    if (typeof fibNum === "string"){
        fibNum = parseInt(fibNum)
    }
    
        let firstVal = 0, reAssignVal = 1, sumOfFib = fibNum;
  
        for(let i = 2; i <= fibNum; i++) {
        sumOfFib = firstVal + reAssignVal;
          firstVal = reAssignVal;
          reAssignVal = sumOfFib;
        }
        return sumOfFib;
    }
    

};

// Do not edit below this line
module.exports = fibonacci;
