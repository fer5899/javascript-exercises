const findTheOldest = function(people) {
    people.sort((a,b) => {
        let currYear = new Date().getFullYear();
        let aDeath = a.yearOfDeath;
        if(typeof a.yearOfDeath === "undefined") aDeath = currYear;
        let bDeath = b.yearOfDeath;
        if(typeof b.yearOfDeath === "undefined") bDeath = currYear;

        const aAge = aDeath - a.yearOfBirth;
        const bAge = bDeath - b.yearOfBirth;

        return aAge < bAge ? 1 : -1;
    });
    console.log(people);

    return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
