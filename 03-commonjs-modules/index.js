const { myName, myHobbies, myFavoriteNumber } = require('./multiple-exports');
const { myName: myOtherName, myFriendsName } = require('./exoprt-and-import');
const greetingFn = require('./single-exports');
// DON'T USE ABSOLUTE PATHS
// const greetingFn = require('c:/Programming/nodeJS/03-commonjs-modules/single-exports.js');

console.log(myName);
console.log(myHobbies);
console.log(myFavoriteNumber);

greetingFn(myName);

console.log(myOtherName);
console.log(myFriendsName);
