
var express = require('express')
const DonationController = require('../controllers/donationController')
const verifyToken = require('../middlewares/verifyToken')
var api = express.Router()

api.get('/', verifyToken.verifyToken, DonationController.getDonations) 
api.get('/filter', verifyToken.verifyToken, DonationController.getDonationFiltered) 
api.get('/:id', verifyToken.verifyToken, DonationController.getDonation ) 
api.post('/', verifyToken.verifyToken, DonationController.saveDonation) 
api.patch('/:idDonation/reserve', verifyToken.verifyToken, DonationController.reserveDonation) 
api.delete('/:idDonation/reserve', verifyToken.verifyToken, DonationController.deReserveDonation) 
api.put('/:id', verifyToken.verifyToken, DonationController.updateDonation) 
api.delete('/:id', verifyToken.verifyToken, DonationController.deleteDonation) 

module.exports = api
