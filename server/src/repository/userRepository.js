'use strict'
const User = require('./../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, global.SALT_KEY, {
    expiresIn: ONE_WEEK
  })
}

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
exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({
      email: req.name
    })
    console.log(req)
    console.log(user)
    if (!user) {
      return {
        e: 'não retornou usuario'
      }
    } else {
      var isValido = bcrypt.compareSync(req.password, user.password)
      if (isValido) {
        console.log('logou')
        const userJson = user.toJSON()
        // console.log('aqui em baixo vai o json')
        // console.log(userJson)
        return {
          user: user,
          token: jwtSignUser(userJson)
        }
      } else {
        return {
          e: 'senha errada'
        }
      }
    }
  } catch (error) {
    return {
      e: 'falha para localizar'
    }
  }
}
