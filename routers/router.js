const functions = {
    sendEmail,
    addToDB
} = require('../controllers/controller')
const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    functions.sendEmail(req, res)
    functions.addToDB(req, res)
})

module.exports = router