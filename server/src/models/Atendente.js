'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Servico = require('./../models/Servico')

var atendente = new Schema({
  atendente: String,
  data: {
    servico: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: Servico
    }],
    qtd: Number,
    inicio: Date,
    fim: Date
  }
})

module.exports = mongoose.model('Atendente', atendente)
