const leapYears = function (valYear) {

    const valYearHandler = valYear;
    if (valYearHandler % 4 === 0 ){
        if (valYearHandler % 400 ===0 && valYearHandler % 100 ===0){
            //returns true if val year is divisible by 400 but not 100
            return true 
        }
        if (valYearHandler % 100 ===0){
            //returns false if val year is divisible by 4 but not 100
            return false 
        }
        return true
    }else{
        //return false if not divisible by 4, 400, 100
        return false
    }
    
};

// Do not edit below this line
module.exports = leapYears;
