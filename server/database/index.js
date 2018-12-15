const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const uri =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/ssbu-tierlist-dev';
const options = { useNewUrlParser: true, useCreateIndex: true };

mongoose
  .connect(
    uri,
    options
  )
  .then(
    () => console.log('-> successfully connected to Mongo'),

    err => {
      console.log('-> error connecting to Mongo: ');
      console.log(err);
    }
  );

module.exports = mongoose.connection;
