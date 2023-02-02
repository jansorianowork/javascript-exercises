const findTheOldest = function(ArrayPeople) {
    let name = ArrayPeople.map(item=>item.name)
    let birthYear = ArrayPeople.map(item=>item.yearOfBirth)
    let deathYear = ArrayPeople.map(item=>item.yearOfDeath)

    let peopleAge=[]
   for(let i=0;i<ArrayPeople.length;i++){
        let ans = 0
        if(deathYear[i] === '' || deathYear[i] === 0 || deathYear[i]===undefined){
            deathYear[i] = new Date().getFullYear();
        }
 
        ans = deathYear[i] - birthYear[i]

        const personAge = {name:name[i],age:ans}
        peopleAge.push(personAge)
   }


   let checkOldestAge = peopleAge.reduce((prev, curr)=>(curr.age > prev.age ? curr : prev))



   return checkOldestAge
 
};

// Do not edit below this line
module.exports = findTheOldest;
