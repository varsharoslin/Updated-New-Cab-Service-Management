const customerProfile = require('../model/cab').Customerprofile;
//get all customers
module.exports.index = (req, res, next) => {
    customerProfile.findAll().then(customers => {
        //console.log(movies)
        res.render('customerprofile-index', {
            data: customers,
            identity: req.identity.user
        });
    })
}

module.exports.create = (req, res, next) => {
    res.render('customerprofile-create');
}

module.exports.createPost = (req, res, next) => {
    //console.log(req.body)
    customerProfile.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        email: req.body.email,
        address: req.body.address,
        })
        .then(customerFromDb => {
            res.redirect("/customerprofile");
        })
}

module.exports.update = (req, res, next) => {
    customerProfile.findByPk(req.params.id)   
        .then(customerFromDb => {
            res.render('customerprofile-update', {
                data: customerFromDb
            });
        });
}
module.exports.updatePost = (req, res, next) => {
    var customer = customerProfile.findByPk(req.params.id)
    .then(customerFromDb=>{
        customerProfile.update(
            {
    
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                gender: req.body.gender,
                email: req.body.email,
                address: req.body.address,
            },
            {
                where: {id: req.params.id}
            }
    ) 
        })
    res.redirect('/customerprofile');
}

module.exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let customerFromDb = await customerProfile.findByPk(id);
    if (customerFromDb != null) {
        await customerProfile.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/customerprofile");
    }
}