'use strict'
const Servico = require('./../models/Servico')

exports.get = async () => {
  var repo = await Servico.find()
  return repo
}
exports.create = async (req) => {
  var repo = await new Servico()
  repo.name = req.name
  repo.ref = req.ref
  return repo
}
