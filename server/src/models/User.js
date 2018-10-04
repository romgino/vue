var mongoose = require('../config/db')
var Schema = mongoose.Schema
var userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true // remove spaços ini e fim

  },
  email: {
    type: String,
    trim: true,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user'
  },
  turno: {
    type: String,
    enum: ['manha', 'tarde'],
    required: true
  },
  password: {
    type: String,
    required: true
  },
  passwordConf: {
    type: String,
    required: true
  },
  token: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  }
})
var User = mongoose.model('User', userSchema)
module.exports = User
