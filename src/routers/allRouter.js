const homeRouter = require('./home')
const coursesRouter = require('./courses')
function route (app) {

    app.use('/courses', coursesRouter)
    app.use('/', homeRouter)

}

module.exports = route;