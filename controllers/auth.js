const User = require('../models/user');


exports.getLogin = (req, res, next) =>{
    res.render('login.ejs');
}
exports.postLogin = (req, res, next) =>{
    const email = req.body.email ;
    const name = req.body.name;
    const current = req.body.current;
    const destination = req.body.destination;
    const days = req.body.days;
    const time = req.body.time;
   
    const user = new User({
        name:name,
        email:email,
       current:current,
        destination:destination,
        time:time,
        days:days
        
    });
 user.save();
next();
}