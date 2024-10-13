const express = require("express")
const router = express.Router();


router.get('/trash', (req, res) =>{
    res.send("Courses deleted")
})

router.get('/', (req, res) =>{
    res.send("THIS IS YOUR COURSES!!!")
})

module.exports = router;