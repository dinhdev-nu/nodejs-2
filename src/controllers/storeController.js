const Courses = require('../models/coursesSchema')

class storeController {

    edit(req, res){
        Courses.findById(req.params.id)
            .then(course => res.render('editCourse', { course }))
        
    }

    create(req, res){
        const course = new Courses(req.body)
        course
            .save()
            .then(() => res.redirect('/'))
    }

    show(req,res){
        Courses.find({})
            .lean()
            .then(courses => res.render('courses', { courses }))
    }
    update(req, res){
        Courses.findOneAndUpdate({_id: req.params.id}, req.body)
            .then(() => res.redirect('/courses'))
    }

}

module.exports = new  storeController();