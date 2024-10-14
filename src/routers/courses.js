const express = require("express");
const router = express.Router();

const storeController = require('../controllers/storeController')

router.get('/', storeController.show)
router.post('/create', storeController.create)


module.exports = router;