const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//   bcrypt.hash(password, salt, (err, hash) => {
//     console.log(hash);
//
//   });
// });

var hashedPassword = '$2a$10$m1s1X0ulUqOiMPIdWGm9hudp/sJv754kbPZ4DjtsR.SAbcvojkzja';

bcrypt.compare(password, hashedPassword, (err, res) => {
  console.log(res);
});

// var data = {
//   id: 4
// };
// var token = jwt.sign(data, '123abd');
// console.log(token);
//
// var decoded = jwt.verify(token, '123abd');
// console.log('decoded', decoded);


// var message = 'I am user number 1';
// var hash = SHA256(message).toString();
//
// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data,
//   hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// };
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString();
//
// if (resultHash === token.hash) {
//   console.log(`Data was not changed`);
// } else {
//   console.log(`Data was changed! Do not trust!`);
// }
