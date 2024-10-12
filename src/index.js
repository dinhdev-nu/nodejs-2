const express = require('express')

const configViewEngines = require('./config/viewEngines')
const router = require('./routers/allRouter') 

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

// config template engines && config static file
configViewEngines(app);

// router
router(app)


app.listen(port, () => {
    console.log(`This ::: http:\\localhost:${port}`)
})

