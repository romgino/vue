'use strict'
const Masano = require('./../models/Mesano')

exports.getMesano = async (data) => {
  var repo = await Masano.findOne({
    mesano: data
  })
  return repo
}
exports.createMesano = async (data) => {
  var repo = new Masano()
  repo.mesano = data
  await repo.save()
  return repo
}
exports.createDia = async (data, dia) => {
  var diaInt = parseInt(dia, 10)
  var teste = 0
  // console.log(diaInt)
  await data.listadia.forEach((e, index, array) => {
    // console.log(e.dia)
    if (e.dia === diaInt) {
      teste++
    }
  })
  if (teste === 0) {
    // console.log('teste === 000')
    data.listadia.push({
      'dia': diaInt
    })
    // data.save()
  } else {
    // dia já existe
    // console.log('teste === 1')
    return data
  }
}
exports.createAtendente = async (user, data, dia) => {
  var jatem = 0
  data.listadia.forEach((e, index, array) => {
    // console.log(e)
    if (e.dia === dia) {
      // console.log(dia, index)
      e.atendente.forEach((atendente, index, array) => {
        if (atendente.nome === user) {
          // console.log('aquiiii')
          jatem = jatem + 1
        }
      })
      if (jatem >= 1) {
        return data
      } else {
        e.atendente.push({
          'nome': user
        })
      }
      // console.log(e.atendente)
    }
  })
  data.save()
  // console.log(user)
  // console.log(data)
}
exports.postAddServico = async (data) => {
  var teste1 = 0
  try {
    const repo = await Masano.findOne({
      _id: data.id
    })
    var dia = new Date().getDate()
    console.log(repo)
    await repo.listadia.forEach((e) => {
      if (e.dia === dia) {
        // e.atendente.registro.push(info.parse())
        e.atendente.forEach((e1) => {
          e1.registro.forEach(e2 => {
            console.log('olhaaa')
            console.log(e2)
            if (e2.servico === data.servico) {
              e2.qtd = data.qtd
              teste1++
            }
          })
          if (teste1 === 0) {
            e1.registro.push({
              'servico': data.servico,
              'qtd': data.qtd
            })
          }
          // if (e1.registro.servico === data.servico) {
          //   e1.registro = {
          //     'qtd': data.qtd
          //   }
          // } else {
          //   e1.registro.push({
          //     'servico': data.servico,
          //     'qtd': data.qtd
          //   })
          // }
          // console.log('olhaaa')
          // console.log(e1.registro)
        })
        console.log('aqui')
        console.log(e.atendente[0])
        console.log(e.atendente[0].registro[0])
      }
    })
    repo.save()
    // console.log(repo)
    // console.log(repo.listadia)
    return 'repo'
  } catch (error) {
    console.log(error)
  }
}
exports.postAddServico = async (data) => {
  var teste1 = 0
  try {
    const repo = await Masano.findOne({
      _id: data.id
    })
    var dia = new Date().getDate()
    await repo.listadia.forEach((e) => {
      if (e.dia === dia) {
        e.atendente.forEach((e1) => {
          e1.registro.forEach(e2 => {
            if (e2.servico === data.servico) {
              e2.qtd = data.qtd
              teste1++
            }
          })
          if (teste1 === 0) {
            e1.registro.push({
              'servico': data.servico,
              'qtd': data.qtd
            })
          }
        })
      }
    })
    repo.save()
    return 'repo'
  } catch (error) {
    console.log(error)
  }
}
