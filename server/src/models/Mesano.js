'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const Servico = require('./../models/Servico')

const schema = new Schema({
  mesano: Number,
  listadia: [{
    dia: Number,
    atendente: [{
      nome: String,
      registro: [{
        servico: String,
        qtd: Number,
        inicio: Date,
        fim: Date
      }]
    }]
  }]
})

module.exports = mongoose.model('Mesano', schema)
