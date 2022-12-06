const express = require('express');
const parser = require('body-parser');
const movieRoutes = require('./routes/cabRoutes');
const accountRoutes = require('./routes/cabdetailsRoutes');
const customerProfileRoutes=require('./routes/customerProfileRoutes');
const driverProfileRoutes=require('./routes/driverProfileRoutes');
const registerRoutes=require('./routes/registerRoutes');
// const driverRoutes=require('./routes/driverRoutes');
const bookingRoutes=require('./routes/bookingRoutes');
const adminRoutes=require('./routes/adminRoute');
const path = require('path');
const cookieSession = require('cookie-session');
const {engine} = require('express-handlebars');
const authMiddleware = require('./middlewares/authenticationMiddleware');

// Creating an express app.
const app = express();

// Configuring the express app to use handlebars template engine.
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
// app.set('views', path.join(__dirname, 'views'))

// Configuring body parser.
app.use("/", parser.urlencoded({extended: true}));

// Configuring static files middleware.
app.use("/static", express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'videos')));
app.use(cookieSession({
    name: 'session',
    httpOnly: true,
    keys: ["asdghjhgsdahjsgdhjasd"],
    maxAge: 24 * 60 * 60 * 1000
}));

app.use(authMiddleware);

app.use(movieRoutes);
app.use(accountRoutes);
app.use(customerProfileRoutes);
app.use(driverProfileRoutes);
app.use(registerRoutes);
// app.use(driverRoutes);
app.use(bookingRoutes);
app.use(adminRoutes);


function handler(req, res){
    res.send("Hello World")
}
app.get('/test', handler)

app.listen(80);
