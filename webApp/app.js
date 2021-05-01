const http = require('http');
const path = require('path');

const express = require('express');
const Mongoose = require('mongoose');
const Session = require('express-session');
const bodyParser = require('body-parser');


const User = require('./models/user');

const app = express();
app.use(bodyParser.urlencoded());
app.set('view engine', 'ejs');
app.set ('views', 'views');

// app.use((req,res,next)=>{
//     if(!req.session.user){
//     return  next();
//     }
//     User.findById(req.session.user._id)
//     .then(user =>{
//         req.user = user;
//         next();
//     })
//     .catch(err => console.log(err));
// });
app.use(express.static(path.join(__dirname,'public')));
const userRoutes = require("./routes/user");
const authRoutes = require("./routes/auth");

app.use(userRoutes);
app.use(authRoutes);

app.use(Session({secret: 'secret',resave:false, saveUninitialized:false}));

app.use((req, res, next) =>{
    res.status(404).render('404');
});

Mongoose.connect('mongodb+srv://shailey:anshum007@cluster0.i4dn9.mongodb.net/DCongest?retryWrites=true&w=majority').then(result =>{
// User.findOne().then(user => {
//     if(!user){
//         const user = new User({
//             name: 'Anshum',
//             email:'test@test'
//         });
//         user.save();
//     }
// });
    
app.listen(3000);
})
.catch(err => {
    console.log(err);
})