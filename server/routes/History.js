const express = require('express')
const { getAllUserHistory, addUserHistory } = require('../controllers/History')

const router = express.Router()

router.post('/',addUserHistory)

router.get('/',getAllUserHistory)

module.exports = router