export default Routes;

const connection = require ('../database/connection')
const express = require ('express')
const router = express.Router()
const GenreController = require('../controllers/controller')

router.post('/newGenre',GenreController.newGenre)

module.exports = router
