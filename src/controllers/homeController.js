
class homeController {

    show(req, res){
        res.render('index')
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

