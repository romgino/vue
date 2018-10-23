var mongoose = require('../config/db')
var Schema = mongoose.Schema
var servicoSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true // remove spaços ini e fim
  },
  ref: {
    type: String,
    trim: true,
    required: true
  },
  created: {
    type: Date,
    default: Date.now
  }
})
var Servico = mongoose.model('Servico', servicoSchema)

module.exports = Servico
