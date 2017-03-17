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

  // db.collection('Todos').find({
  //   _id: new ObjectID('58c6133f9a430b391c474b5d')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable To fetch data', err);
  // });

  // db.collection('Todos').find()
  // .count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable To fetch data', err);
  // });

  db.collection('Users').find({
    name: 'Misha'
  })
  .toArray().then((objects) => {
    console.log(`Users with name Misha: ` + JSON.stringify(objects, undefined, 2));
  }, (err) => {
    console.log('Unable To fetch data', err);
  });

  // db.close();
});
