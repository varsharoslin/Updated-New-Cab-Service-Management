const User = require('../model/user');

module.exports.login = (req, res, next)=>{
    res.render('login');



// if (userFromDb.dataValues.role == "passenger") {

//     return res.redirect("/");

// } else if (userFromDb.dataValues.role == "driver") {

//     return res.redirect("/");

// } else {

//     return res.redirect("/admin/home");

// }

// res.redirect("/home");


}










module.exports.homeget  = (req, res, next)=>{
    res.render('home');
}
module.exports.homepageget = (req, res, next)=>{
    res.render('homepage');
}
module.exports.cabbookingpost = (req, res, next)=>{
    res.render('booking');
}
module.exports.cabbookingget = (req, res, next)=>{
    res.render('booking');
}
module.exports.registerpost = (req, res, next)=>{

    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        role: req.body.role,
        gender: req.body.gender,
        email: req.body.email,
        address: req.body.address,
        password: req.body.password
        })
        .then(userFromDb => {
            res.redirect("/home");
        })
}



module.exports.usersGet = (req, res, next) => {
    User.findAll().then(userfromdb => {
        console.log(userfromdb)
        res.render('registerprofile-index', {
            data: userfromdb,
            identity: req.identity.user
        });
    })
}






module.exports.registerget = (req, res, next)=>{
    res.render('register');
}
module.exports.loginget = (req, res, next)=>{
    res.render('login');
}
module.exports.cabdetailsget = (req, res, next)=>{
    res.render('cabdetails');
}
module.exports.availablecabsget = (req, res, next)=>{
    res.render('availablecabs');
}
module.exports.paymentget = (req, res, next)=>{
    res.render('payment');
}
module.exports.bookedsucessfullyget = (req, res, next)=>{
    res.render('bookedsucessfully');
}
module.exports.driverget = (req, res, next)=>{
    res.render('driver');
}
module.exports.driverloginget = (req, res, next)=>{
    res.render('driverlogin');
}
module.exports.customerloginget = (req, res, next)=>{
    res.render('customerlogin');
}
module.exports.customerget = (req, res, next)=>{
    res.render('customer');
}
// module.exports.customerloginget = (req, res, next)=>{
//     res.render('customerlogin');
// }
// module.exports.customerregisterget = (req, res, next)=>{
//     res.render('customerregister');
// }
module.exports.customerprofileget = (req, res, next)=>{
    res.render('customerprofile');
}
module.exports.driverprofileget = (req, res, next)=>{
    res.render('driverprofile');
}


module.exports.cabbookingget = (req, res, next)=>{
    res.render('booking');
}

module.exports.passengerprofileget = (req, res, next)=>{
    res.render('passengerprofile');
}
module.exports.loginPost = async (req, res, next)=>{
    const {email, password} = req.body;
    const userFromDb = await User.findOne({
        where: {email: email, password: password}
    });
    console.log(userFromDb);
    if(userFromDb == null){
        return res.render('login', {message: 'No user with this email or password was found.'})
    }
else if(userFromDb.role == 'admin'){
    res.redirect('/admin');
}
else if(userFromDb.role == 'passenger'){
    res.redirect('/customer');
}
else{
    req.session.userId = userFromDb.id;
    res.redirect('/driver');
}

    
}

module.exports.register = (req, res, next)=>{
    res.render('register');
}

module.exports.registerPost = async (req, res, next)=>{
    const {firstName, lastName, role, email, password } = req.body;
    let existingUser = await User.findOne({
        where: {
            email: email
        }
    });

    if(existingUser){
        return res.render('register', {message: 'Already registered.'});
    }

    await User.create({
        firstName: firstName,
        lastName: lastName,
        role: role,
        email: email,
        password: password
    });

    res.redirect('/login');
}




module.exports.delete = async (req, res, next) => {
    let id = req.params.id;
    let userfromdb = await User.findByPk(id);
    if (userfromdb != null) {
        await User.destroy({
            where: {
                id: id
            }
        });
        res.redirect("/registerprofile");
    }
}