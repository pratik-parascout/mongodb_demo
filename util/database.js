// util/database.js
const { MongoClient } = require('mongodb');

let _db;

const mongoConnect = (callback) => {
  MongoClient.connect(
    'mongodb://localhost:27017/shop',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
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