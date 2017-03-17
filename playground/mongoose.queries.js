const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '58c779d87636d20354f1ca74';

User.findById(id).then((user) => {
  if(!user){
    return console.log('User not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch((e) => console.log(e));

// var id = '58ca16d8fb621109627332fc';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));
