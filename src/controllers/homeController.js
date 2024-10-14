const Coursedb = require('../models/coursesSchema')

class homeController {

    show(req, res){
        Coursedb.find({})
            .lean()
            .then(course => res.render('index', { course }))
    }

}

module.exports = new homeController();

// const homeController = () =>{

//     return {

//         show(req, res) {
//             res.render('index');
//         }

//     }


// }

