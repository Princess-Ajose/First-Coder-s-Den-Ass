// ASSIGNMENT  ON SETS AND MAPS

// 1. create an empty set, create  a set containing 0 to 10 using loop, remve an element from a set, clear a set, create a set of 5 string elements from array,  create a map of countries and number of characters of a county.

let B = new Set()
console.log(B);

const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let number2 = new Set(number)

console.log(number2);

for( let ii=0; ii > number2.size; ii++){

  console.log(number2);

}

const desingers = ['Gucci', 'Balenciaga', 'Versace', 'Channel', 'Dolice']
const setOfDesigners = new Set(desingers)
console.log(setOfDesigners.delete('Gucci'))

let countries = [['Nigeria', 'Abuja'],
['Senegal', 'Dakar'],
['France','Tokyo'],
['Ukaraine','Keiv'],['America','Washington'],
['Norway','Oslo'],
['Finland','Helsinki']];
countriesMap = new Map(countries)
console.log(countriesMap);

for (const countriesMap of countries){
  console.log(countriesMap);
}
// desctructiveCountries
const  [destruc1, destruct2, destruct3, destruct4, destruct5, destruct6, destruct7] = countries
 console.log(destruct5);


//  EXERCISE LEVEL TWO
// 1. find a union b, find a interscet b, find a with b

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const setb = [...a, ...b]
// a union b

console.log(setb.sort((a,b) => a-b));

const allSet = new Set(setb);

console.log(allSet);

// a instersect b

let allInterSect = a.filter((num) => b.includes(num));
console.log(allInterSect);

// find a with b

allInterSect = a.filter((num) => b.entries(num));

console.log(allInterSect);
 
const languages = ['English','English','English', ' Russian',' Russian',' Russian',' Russian',' Russian',' Russian',' Russian','English','English', 'German','German','German','German','German','German','German','German', ' Russian', 'Dutch', 'German', 'Dutch','Dutch','Dutch','Dutch','Dutch','Dutch', 'Serbian','Serbian','Serbian','Serbian','Serbian', 'Swahili', 'Swahili', 'Swahili', 'Swahili', 'Swahili', 'Swahili', 'Swahili', 'Swahili', 'Swahili', 'Swahili', 'Swahili', 'Swahili',  'Dutch','Dutch', 'Serbian', 'Swahili', 'Portugese','Portugese','Portugese','Portugese','Portugese','Portugese','Portugese','Portugese','Portugese','Portugese','Portugese','Portugese','Portugese','Portugese','Portugese', 'Chinese',  'Chinese', 'Chinese', 'Chinese', 'Chinese', 'Chinese', 'Chinese', 'Chinese', 'Chinese', 'Arabic', 'Arabic','Arabic', 'French','French','French','French','French','French','French','French','French','French','French','French','French','French','French','French','French','French','French', 'Arabic','Arabic','Arabic','Arabic','Arabic','Arabic', 'French', 'Spanish','Spanish','Spanish','Spanish','Spanish','Spanish','Spanish','Spanish','Spanish','Spanish','Spanish', 'Spanish', 'Arabic','Arabic','Arabic','Arabic','Arabic','Arabic','Arabic', 'Chinese', 'Chinese', 'Chinese', 'Chinese', 'Chinese', 'Chinese','Portugese','Portugese','Portugese','Portugese','Portugese','Portugese','English','English','English','English','English','English','English','English','English','English','English','English','English','English','English','English']
   




