// const MongoClient = require('mongodb').MongoClient;
const  {MongoClient, ObjectID} = require('mongodb'); // identical to code aboce

// var obj = new ObjectID();
// console.log(obj);
// var user = {name: 'Misha', age: 32};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to isert todo', err);
  //   }
  //   return console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').insertOne({
    name: 'Misha',
    age: 32,
    location: 'San Francisco, CA'
  }, (err, result) => {
    if (err) {
      return console.log('Unable to isert todo', err);
    }
    return console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  });

  db.close();
});
