const express = require('express')
const methodOverride = require('method-override')
const path = require('path')

const configViewEngines = (app) => {
    
    // config template engines
    app.set('views',path.join( "./src" , '/views'));
    app.set('view engine', 'ejs')

    // cofig static 
    app.use(express.static(path.join("./src", 'public')))

    // post req.body
    app.use(express.json());
    app.use(
        express.urlencoded({
            extended: true,
        }),
    );
    app.use(methodOverride('_method'))

} 

module.exports = configViewEngines;