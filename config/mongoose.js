// Connecting MongoDB using mongoose

const mongoose = require('mongoose');
const env = require('./environment');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://mukeshaero43:mukeshaero43@cluster0.ogaqhy5.mongodb.net/`);
  console.log('MongoDB connected successfully');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
//ebt21qM33O6ZjC78
