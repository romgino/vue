var express = require('express')
var router = express.Router()
const controller = require('./../controllers/userController')

/* GET users listing. */
router.get('/', controller.get)
router.get('/cadastro', function (req, res, next) {
  res.render('user/cadastro', { title: 'Cadastro' })
})
router.post('/create', controller.create)

module.exports = router
