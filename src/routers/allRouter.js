const home = require('./home')
const courses = require('./courses')
function route (app) {

    app.use('/courses', courses)
    app.use('/', home)

}

module.exports = route;