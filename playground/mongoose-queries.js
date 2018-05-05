const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');

var id = '5aed9b91b4818402d7c35abc';

User.findById(id).then((user) => {
    if (!user) {
        return console.log('User not found');
    }
    console.log(JSON.stringify(user, undefined, 4));
}, (e) => {
    console.log(e.toString());
});