const repoRegistro = require('./../repository/registroRepository')
const repoServico = require('./../repository/servicoRepository')
const auth = require('./../config/auth-service')

exports.get = async (req, res) => {
  try {
    // let listaDias = null
    var d = new Date()
    var dia = d.getDate()
    var mes = d.getMonth() + 1
    var ano = d.getFullYear()
    var mesano = mes.toString() + ano.toString()
    var data = await repoRegistro.getMesano(mesano)
    // console.log(data.listadia.filter((obj) => { return obj.dia }))
    if (data === null) {
      // nao tem informação
      await repoRegistro.createMesano(mesano)
        .then((data) => {
        // console.log(data)
        })
    } else {
      // mesano já foi criado
      repoRegistro.createDia(data, dia).then(
        (data) => {
          // listaDias = data
          // console.log(listaDias)
        }
      )
      // recuperando informações do token
      var listaServicos = await repoServico.get()
      var token = req.headers['x-access-token']
      var user = auth.decodeToken(token)
      repoRegistro.createAtendente(user.name, data, dia)
      // console.log(listaServicos)
      res.send({ data, listaServicos })
    }
  } catch (e) {
    console.log(e)
  }
}

exports.create = (req, res) => {
  return 'post'
}

exports.addServico = async (req, res) => {
  var repo = await repoRegistro.postAddServico(req.body)
  console.log(repo)
}
exports.subServico = async (req, res) => {
  var repo = await repoRegistro.postSubServico(req.body)
  console.log(repo)
}
