const express = require('express')
const path = require('path')

// dotenv...
require('dotenv').config()

const app = express()

// cofig static 
app.use(express.static(path.join(__dirname, 'public')))



const port = process.env.PORT || 3000

// config template engines
app.set('views',path.join( __dirname + '/views'));
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render("index.ejs")
})



app.listen(port, () => {
    console.log(`This ::: http:\\localhost:${port}`)
})

