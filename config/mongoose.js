// Connecting MongoDB using mongoose

const mongoose = require('mongoose');
const env = require('./environment');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb://127.0.0.1:27017/${env.db}`);
  console.log('MongoDB connected successfully');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}