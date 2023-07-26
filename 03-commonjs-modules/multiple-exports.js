const myName = 'nika';
const myHobbies = ['painting', 'cycling', 'volleyball'];
const myFavoriteNumber = 2;

console.log('multiple-exports');

module.exports.myName = myName;
exports.myHobbies = myHobbies;
exports.myFavoriteNumber = myFavoriteNumber;
