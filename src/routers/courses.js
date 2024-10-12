const express = require("express")
const router = express.Router();

router.get('/', (req, res) =>{
    res.send("THIS IS YOUR COURSES!!!")
})

module.exports = router;