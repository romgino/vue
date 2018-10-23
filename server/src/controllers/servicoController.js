const repoServico = require('../repository/servicoRepository')

exports.get = async (req, res) => {
  try {
    repoServico.get().then(data => {
      return res.send(data)
    })
  } catch (error) {
    console.log('falhou')
  }
}
exports.create = async (req, res) => {
  try {
    console.log(req.body)
    await repoServico.create(req.body)
      .then(data => {
        res.send(data)
      })
  } catch (error) {
    console.log('falhou')
  }
}
