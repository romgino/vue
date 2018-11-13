var express = require('express')
var router = express.Router()
const controller = require('./../controllers/registroController')
const auth = require('./../config/auth-service')

/* GET users listing. */
router.get('/', auth.authorize, controller.get)
router.post('/create', controller.create)
router.post('/addServico', controller.addServico)
router.post('/subServico', controller.subServico)

module.exports = router
