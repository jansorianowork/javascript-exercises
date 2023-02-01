let firstVal = 0
let SecondVal = 0
const add = function(firstVal,SecondVal) {
  let ans = 0

  ans = firstVal + SecondVal
  return ans
};

const subtract = function(firstVal,SecondVal) {
  let ans = 0
  ans = firstVal - SecondVal
  return ans
};

const sum = function(numList) {
  let sum = 0
  if(numList.length===0){
    sum = 0
  }else{
    for(let i = 0;i < numList.length;i++){
      sum += numList[i]
    }
  }
  return sum



};

const multiply = function(multiplyList) {
  let product = 1

  if(multiplyList.length===0){
    product = 0
  }else{
    for(let i = 0;i < multiplyList.length;i++){
      product *= multiplyList[i]
    }
  }
  return product

};

const power = function(numPow,raiseTo) {

  let powr = 0

  powr = (numPow ** raiseTo)

  return powr
	
};

const factorial = function(factorialArr) {

  let answer = 1
  // num is 0 or 1
  if (factorialArr===0 || factorialArr===1){
    return answer
  }else{

    for(let i = factorialArr;i >=1;i--){
      // console.log(factorialArr,i)
      // console.log(answer)

      answer = answer * i

    }
    return answer
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
