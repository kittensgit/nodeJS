const { myName, myHobbies } = require('./multiple-exports');

const myFriendsName = 'leo';

module.exports.myName = myName;
module.exports.myFriendsName = myFriendsName;
module.exports.myGreatHobbies = myHobbies;
