const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect(process.env.CONNECTION_STRING, {
    useMongoClient: true
  })