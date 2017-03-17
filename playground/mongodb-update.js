// const MongoClient = require('mongodb').MongoClient;
const  {MongoClient, ObjectID} = require('mongodb'); // identical to code aboce

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('58c62b6e124e8e0ecff6ec3d')
  // },{
  //   $set: {
  //     completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58c619647f4b1b39b88d3696')
  },{
    $set: {
      name: 'Mikhail'
    },
    $inc: {
      age: 1
    }
  },{
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });




  // db.close();
});
