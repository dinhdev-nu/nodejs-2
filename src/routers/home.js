const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("index.ejs")
})

router.get('/dinh', (req, res) =>{
    res.send("CAHO")
})

module.exports =  router; 