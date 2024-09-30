// const express = require('express')
// const bodyParser = require('body-parser')

// const app = express()

// app.get("/",(req,res) => {
//     res.send("Hello World!")
// }).listen(3000);

// console.log("listening the server...") // testing server

const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const url = 'mongodb://localhost:27017/';
const dbName = 'address-data';

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {  //connection mongoDB
  if (err) {
    console.error(err);
    return;
  }
  console.log('Connected to MongoDB');


  const db = client.db(dbName);

  app.post('/register', (req, res) => {
    const { name, address } = req.body;
    const usersCollection = db.collection('users');
    const addressesCollection = db.collection('addresses');

    usersCollection.insertOne({ name }, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).send('Error registering user');
        return;
      }
      
      const userId = result.insertedId;
      addressesCollection.insertOne({ userId, address }, (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error storing address');
          return;
        }
        console.log('User registered successfully!');
      });
    });
  });


  app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });
});