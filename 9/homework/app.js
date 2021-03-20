function reverseNumber(num) {
    let numString = ''+num;
    let reversNumber = new String();
    for(let index = numString.length-1; index >= 0; index--) {
        reversNumber +=''+numString[index];
    }
    return reversNumber;
}

function forEach(arr, func) {
    let math = new Array();
    for(let index = 0; index < arr.length; index++) {
        math.push(func(arr[index]));
    }
    return math;
}

function map(arr, func) {
    let newMapArray = new Array();
    newMapArray = forEach(arr,func);
    return newMapArray;
}

function filter(arr, func) {
    let newFiltArray = forEach(arr,func);
    let newDoneFiltArray = new Array();
    for(let index = 0; index < arr.length; index++) {
       if(newFiltArray[index]===true){
        newDoneFiltArray.push(arr[index]);
       }
    }
    return newDoneFiltArray;
}

function getAdultAppleLovers(data) {
    let ageCondition = 18;
    let newKeyses = filter(data, function(age) { 
        return age.favoriteFruit === 'apple' && age.age > ageCondition 
    })
    let newKeys = map(newKeyses, function(el) { 
        return el.name 
    }) 
    return newKeys
}

function getKeys(obj) {
    let newKeys = new Array();
    for (const ObjKeys in obj) {
        newKeys.push(ObjKeys);
    }
    return newKeys;
}

function getValues(obj) {
    let newValues = new Array();
    for (const ObjValues in obj) {
        newValues.push(obj[ObjValues]);
    }
    return newValues;
}

function showFormattedDate(dateObj) {
    let t = ''+dateObj; let lastWorld = 2; let lastWAndOne = 3;
    let day = new Array(); let dayStart = 8; let dayEnd = 10;
    let munth = new Array(); let munthStart = 4; let munthEnd = 7;
    let year = new Array(); let yearStart = 11; let yearEnd = 15;
    for (let index = munthStart; index < munthEnd; index++) {
        munth.push(t[index]);
    }
    for (let index = yearStart; index < yearEnd; index++) {
        year.push(t[index]);
    }
    for (let index = dayStart; index < dayEnd; index++) {
        day.push(t[index]);
    }
    newFormattedDate = 'It is '+day[0]+day[1]+' of '+munth[0]+munth[1]+munth[lastWorld]+', '
    +year[0]+year[1]+year[lastWorld]+year[lastWAndOne];
    return newFormattedDate
}

console.log(reverseNumber(12345)) // returns 54321 
console.log(reverseNumber(-56789)) // returns -98765

console.log(filter([2, 5, 1, 3, 8, 6], function(el) { return el > 3 })) // returns [5, 8, 6]
console.log(filter([1, 4, 6, 7, 8, 10], function(el) { return el % 2 === 0 })) //returns [4, 6, 8, 10]
forEach([2,5,8], function(el) { console.log(el) }) // logs to console: 2 5 8
console.log(map([2, 5, 8], function(el) { return el + 3; })) // returns [5, 8, 11]
data = [ {
    "_id": "5b5e3168c6bf40f2c1235cd6",
    "index": 0,
    "age": 39,
    "eyeColor": "green",
    "name": "Stein",
    "favoriteFruit": "apple"
}, {
    "_id": "5b5e3168e328c0d72e4f27d8",
    "index": 1,
    "age": 38,
    "eyeColor": "blue",
    "name": "Cortez",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5b5e3168cc79132b631c666a",
    "index": 2,
    "age": 2,
    "eyeColor": "blue",
    "name": "Suzette",
    "favoriteFruit": "apple"
}, {
    "_id": "5b5e31682093adcc6cd0dde5",
    "index": 3,
    "age": 17,
    "eyeColor": "green",
    "name": "Weiss",
    "favoriteFruit": "banana"
  }
]


console.log(getAdultAppleLovers(data)) // returns [‘Stein’]
console.log(getKeys({keyOne: 1, keyTwo: 2, keyThree: 3})) // returns [“keyOne”, “keyTwo”, “keyThree”]
console.log(getValues({keyOne: 1, keyTwo: 2, keyThree: 3}))// returns [1, 2, 3]
console.log(showFormattedDate(new Date('2018-08-27T01:10:00')))// returns ‘It is 27 of Aug, 2018’