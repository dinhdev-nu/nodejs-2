const express = require('express')

const configViewEngines = require('./config/viewEngines')
const router = require('./routers/allRouter') 

// config
require('dotenv').config()
const mongodb = require("./config/db/index")

const app = express()
const port = process.env.PORT || 3000   


// config template engines && config static file
configViewEngines(app);
mongodb.coursesDb()

// router
router(app)


app.listen(port, () => {
    console.log(`This ::: http:\\localhost:${port}`)
})

