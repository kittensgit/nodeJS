const { myName, myHobbies, myFavoriteNumber } = require('./multiple-exports');
const {
    myName: myOtherName,
    myFriendsName,
    myGreatHobbies,
} = require('./exoprt-and-import');
const greetingFn = require('./single-exports');
// DON'T USE ABSOLUTE PATHS
// const greetingFn = require('c:/Programming/nodeJS/03-commonjs-modules/single-exports.js');

// Imports from multiple-exports
console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);

myHobbies.push('cooking');

// Import from single-exports
greetingFn(myName);

// Imports from export-and-import
console.log(myOtherName);
console.log(myFriendsName);
console.log(myGreatHobbies);
