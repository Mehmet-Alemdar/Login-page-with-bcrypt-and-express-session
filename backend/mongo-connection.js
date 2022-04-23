const mongoose = require('mongoose');

const connectionString = process.env.MONGODB_CONNECTION_STRING || 'mongodb://mongodb/login-page'

main()

async function main() {
  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("we're connected to mongodb");
  }catch(err) {
    console.log(err)
  }
}