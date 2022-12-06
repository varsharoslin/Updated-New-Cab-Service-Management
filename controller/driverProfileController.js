
const driverProfile = require('../model/driverprofile');

//get all customers
module.exports.index = (req, res, next) => {
    driverProfile.findAll().then(driver => {
        //console.log(movies)
        res.render('driverprofile-index', {
            data: driver,
            identity: req.identity.user
        });
    })
}

module.exports.create = (req, res, next) => {
    res.render('driverprofile-create');
}

module.exports.createPost = (req, res, next) => {
    //console.log(req.body)
    driverProfile.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        email: req.body.email,
        address: req.body.address,
        license: req.body.license,
        })
        .then(driverFromDb => {
            res.redirect("/driverprofile");
        })
}

module.exports.update = (req, res, next) => {
    driverProfile.findByPk(req.params.id)   
        .then(driverFromDb => {
            res.render('driverprofile-update', {
                data: driverFromDb
            });
        });
}
module.exports.updatePost = (req, res, next) => {
    var driver = driverProfile.findByPk(req.params.id)
    .then(driverFromDb=>{
        driverProfile.update(
            {
    
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                gender: req.body.gender,
                email: req.body.email,
                address: req.body.address,
                license: req.body.license,
            },
            {
                where: {id: req.params.id}
            }
    ) 
        })
    res.redirect('/driverprofile');
}

module.exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let driverFromDb = await driverProfile.findByPk(id);
    if (driverFromDb != null) {
        await driverProfile.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/driverprofile");
    }
}