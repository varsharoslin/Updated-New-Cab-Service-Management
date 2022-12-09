const passengerProfile = require('../model/cab').Passengerprofile;
//get all customers
module.exports.index = (req, res, next) => {
    passengerProfile.findAll().then(passengers => {
        //console.log(movies)
        res.render('passengerprofile-index', {
            data: passengers,
            identity: req.identity.user
        });
    })
}

module.exports.create = (req, res, next) => {
    res.render('passengerprofile-create');
}

module.exports.createPost = (req, res, next) => {
    //console.log(req.body)
    passengerProfile.create({
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        address: req.body.address,
        number: req.body.number,
        })
        .then(passengersFromDb => {
            res.redirect("/profile");
        })
}

module.exports.update = (req, res, next) => {
    passengerProfile.findByPk(req.params.id)   
        .then(passengersFromDb => {
            res.render('passengerprofile-update', {
                data: passengersFromDb
            });
        });
}
module.exports.updatePost = (req, res, next) => {
    var passengers = passengerProfile.findByPk(req.params.id)
    .then(passengersFromDb=>{
        passengerProfile.update(
            {
    

                id: req.body.id,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                address: req.body.address,
                number: req.body.number,
            },
            {
                where: {id: req.params.id}
            }
    ) 
        })
    res.redirect('/profile');
}

module.exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let passengersFromDb = await passengerProfile.findByPk(id);
    if (passengersFromDb != null) {
        await passengerProfile.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/profile");
    }
}