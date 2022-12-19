const removeFromArray = function(arrayHandler,...arraytoRemove) {
        // filter each item in arrayHandler based on item in array remove
        // use spread operator to filter each value of array remove into array handler
        return arrayHandler.filter( val => !arraytoRemove.includes(val) );
};
// Do not edit below this line
module.exports = removeFromArray;
