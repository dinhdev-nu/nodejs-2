const express = require("express");
const router = express.Router();

const storeController = require('../controllers/storeController')

router.delete('/delete', storeController.delete)
router.get('/delete/:id', storeController.deleteComfirm)
router.put('/update/:id', storeController.update)
router.get('/', storeController.show)
router.post('/create', storeController.create)
router.get('/edit/:id', storeController.edit)


module.exports = router;