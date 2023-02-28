const mongoose = require('mongoose');
const config = require('config');
const db = "mongodb://admin:admin@ac-nfkk3jd-shard-00-00.oowxflx.mongodb.net:27017,ac-nfkk3jd-shard-00-01.oowxflx.mongodb.net:27017,ac-nfkk3jd-shard-00-02.oowxflx.mongodb.net:27017/?ssl=true&replicaSet=atlas-qgbnru-shard-0&authSource=admin&retryWrites=true&w=majority"

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
