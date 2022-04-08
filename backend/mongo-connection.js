const mongoose = require('mongoose');

main()

async function main() {
  try {
    await mongoose.connect('mongodb://localhost:27017/login-page', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("we're connected to mongodb");
  }catch(err) {
    console.log(err)
  }
}