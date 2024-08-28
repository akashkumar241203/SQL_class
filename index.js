const { faker } = require('@faker-js/faker');
const mysql2 = require('mysql2');

const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: '241203',
});

// Generate a unique ID using faker
let user = [faker.string.uuid(), "123_abc", "abc@gmail.com", "abc"];

let q = "INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)";

try {
  connection.query(q, user, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
} catch (err) {
  console.log(err);
}

connection.end();

let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};
