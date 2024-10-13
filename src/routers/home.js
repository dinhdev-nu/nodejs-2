const express = require('express');
const router = express.Router();

const homeControler  = require('../controllers/homeController.js')

router.get('/', homeControler.show)

module.exports =  router;   