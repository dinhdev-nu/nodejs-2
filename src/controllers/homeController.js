const Coursedb = require('../models/coursesSchema')

class homeController {

    show(req, res){
        Coursedb.find({})
            .then(course => res.json(course))
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

