'use strict'
const User = require('./../models/User')
const bcrypt = require('bcryptjs')

exports.get = async () => {
  const res = await User.find({

  }, 'name email')
  return res
}
exports.create = async (req) => {
  var encodePass = bcrypt.hashSync(req.password, 8)
  try {
    var item = await new User()

    item.name = req.name
    item.email = req.email
    // role
    item.turno = req.turno
    item.password = encodePass
    item.passwordConf = req.passwordConf
    // item.token= req.token
    item.save()
    console.log(item)
  } catch (error) {
    console.log('falha')
  }
}
