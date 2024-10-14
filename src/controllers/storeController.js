const Courses = require('../models/coursesSchema')

class storeController {

    create(req, res){
        const course = new Courses(req.body)
        course
            .save()
            .then(() => res.redirect('/'))
    }

    show(req,res){
        res.render('courses')
    }

}

module.exports = new  storeController();