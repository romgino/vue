var mongoose = require('mongoose')
global.SALT_KEY = 'rom4555-345rff-gin777-ruhkn'
mongoose.connect('mongodb://localhost:27017/usuario',
  {
    useNewUrlParser: true
  }, function (err, db) {
    if (err) {
      throw err
    }
  })
module.exports = mongoose
