
var express = require('express')
const UserController = require('../controllers/userController')
const verifyToken = require('../middlewares/verifyToken')

var api = express.Router()

//api.get('/isTercerSector/:email',verifyToken.auth, UserController.getIsTercerSector ) // devolver un usuario en particular (id)
//api.get('/donations', verifyToken.auth,DonationController.getDonationsByCreator ) // devolver un usuario en particular (id)
api.get('/', verifyToken.verifyToken, UserController.getUsers) // devolver todos los usuarios
api.get('/:id', verifyToken.verifyToken, UserController.getUser ) // devolver un usuario en particular (id)
api.put('/:id', verifyToken.verifyToken, UserController.updateUser) // actualizamos un usuario completo (id) (la información nueva me llega por el body)
api.delete('/:id', verifyToken.verifyToken, UserController.deleteUser) // borramos un usuario enparticular (id)

module.exports = api