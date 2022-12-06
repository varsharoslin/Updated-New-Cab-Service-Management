const newcabdetails = require('../model/cabdetails');
module.exports.index = (req, res, next) => {
    newcabdetails.findAll().then(cabdetails => {
        console.log(cabdetails)
        res.render('cabdetails-index', {
            data: cabdetails,
            identity: req.identity.user
        });
    })
}

module.exports.create = (req, res, next) => {
    res.render('cabdetails-create');
}

module.exports.createPost = (req, res, next) => {
    newcabdetails.create({
            cabName: req.body.cabName,
            cabType: req.body.cabType,
            cabCapacity: req.body.cabCapacity,
            cabDescription: req.body.cabDescription
        })
        .then(cabFromDb => {
            res.redirect("/cabs");
        })
}

module.exports.update = (req, res, next) => {
    newcabdetails.findByPk(req.params.id)
        .then(cabFromDb => {
            res.render('cabdetails-update', {
                data: cabFromDb
            });
        });
}




module.exports.updatePost = async (req, res, next) => {
    // var movie = await movie.findByPk(req.params.id);
    await newcabdetails.update(
        {

            cabName: req.body.cabName,
            cabType: req.body.cabType,
            cabCapacity: req.body.cabCapacity,
            cabDescription: req.body.cabDescription
        },
        {
            where: {id: req.params.id}
        }
    )
    res.redirect('/cabs');
}

module.exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let cabFromDb = await newcabdetails.findByPk(id);
    if (cabFromDb != null) {
        await newcabdetails.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/cabs");
    }
}

























// module.exports.index = (req, res, next) => {
//     newcabdetails.findAll().then(booking => {
//         // console.log(cabdetails)
//         res.render('cabdetails-index', {
//             data: cabdetails,
//             identity: req.identity.user
//         });
//     })
// }

// module.exports.bookingcreate = (req, res, next) => {
//     res.render('booking-create');
// }

// module.exports.createPost = (req, res, next) => {
//     console.log(req.body)
//     newcabdetails.create({
//             cabName: req.body.cabName,
//             cabType: req.body.cabType,
//             cabCapacity: req.body.cabCapacity,
//             cabDescription: req.body.cabDescription
//         })
//         .then(movieFromDb => {
//             res.redirect("/");
//         })
// }

// module.exports.update = async(req, res, next) => {
//     newcabdetails.findByPk(req.params.id)
//         .then(movieFromDb => {
//             res.render('booking-update', {
//                 data: movieFromDb
//             });
//         });
// }


// module.exports.updatePost = async (req, res, next) => {
//     // var movie = await movie.findByPk(req.params.id);
//     await newcabdetails.update(
//         {
//             cabName: req.body.cabName,
//             cabType: req.body.cabType,
//             cabCapacity: req.body.cabCapacity,
//             cabDescription: req.body.cabDescription
//         },
//         {
//             where: {id: req.params.id}
//         }
//     )
//     res.redirect('/');
// }

// module.exports.delete = async (req, res, next) => {
//     let id = req.params.id;
//     let movieFromDb = await newcabdetails.findByPk(id);
//     if (movieFromDb != null) {
//         await newcabdetails.destroy({
//             where: {
//                 id: id
//             }
//         });
//         res.redirect("/");
//     }
// }