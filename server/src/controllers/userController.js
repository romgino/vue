'use strict'

// const User = require('./../model/User');

const repoUser = require('../repository/userRepository')

exports.get = async (req, res, next) => {
  try {
    var data = await repoUser.get()
    res.status(200).render('user/view', { title: 'lista', data })
  } catch (e) {
    res.status(500).send(e)
  }
}
exports.create = async (req, res, next) => {
  try {
    console.log(req.body)
    await repoUser.create(req.body)
    // item.save().then(x => {res.status(201).send({message: 'ok'})}).catch(e => {res.status(400).send({message:"falha",data: e})})
    // console.log(item);
    res.status(201).send(req.body)
    // item.save();
  } catch (e) {
    res.status(400).send({ message: 'falha', error: e })
  }
}
exports.logar = async (req, res, next) => {
  try {
    // console.log(req.body.name)
    await repoUser.login(req.body).then(data => {
      return res.send(data)
    })
  } catch (e) {
    return res.status(403).send({
      e: 'login invalido'
    })
  }
}
exports.login = async (req, res, next) => {
  try {
    await console.log(req.body)
  } catch (e) {
    console.log(e)
  }
}
