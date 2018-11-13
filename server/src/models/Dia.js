'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Atendente = require('./../models/Atendente')

var dia = new Schema({
  dia: Number,
  data: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: Atendente
  }]
})

module.exports = mongoose.model('Dia', dia)
