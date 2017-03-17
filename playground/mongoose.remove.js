const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({text: 'name'}).then((todo) => {
  console.log(todo);
});

// Todo.findByIdAndRemove('58cb772874da186d53a2a63b').then((todo) => {
//   console.log(todo);
// });
