// util/database.js
const { MongoClient } = require('mongodb');

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
<<<<<<< HEAD
    'mongodb://localhost:27017/shop',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
=======
    'uri'
>>>>>>> a948f6f5b938c14e7869c59a7e70a5b918c76767
  )
    .then(client => {
      console.log('Connected to MongoDB');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.error('MongoDB Connection Error:', err);
      throw err;
    });
};

const getDb = () => {
  if (_db) return _db;
  throw 'No database found!';
};

module.exports = { mongoConnect, getDb };