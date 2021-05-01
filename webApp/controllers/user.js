const User = require('../models/user');
let current;
let destination;
let time;
let users;
let name;
exports.getIndex = (req, res, next) =>{
    res.render('index.ejs');
}
exports.getBusReccomend = (req, res, next) =>{

    User.find({time:'9:00 PM'}).then(user =>{
        
        current = user[0].current;
        destination = user[0].destination;
        time = user[0].time;
        users = user.length;
    });

      
    res.render('busReccomend.ejs',{current:current, destination:destination, time:time, users:users});
}
exports.getBusRec = (req, res, next) =>{
    res.render('BusRec.ejs');
}
exports.getTimeRec = (req, res, next) =>{

    User.find({time:'9:00 PM'}).then(user =>{
        
        current = user[0].current;
        destination = user[0].destination;
        time = user[0].time;
        users = user.length;
    });

      
    res.render('timeRec.ejs',{current:current, destination:destination, time:time, users:users});
}
exports.getCarpool = (req, res, next) =>{

    User.find({time:'9:00 PM'}).then(user =>{
        name = user;
        current = user[0].current;
        destination = user[0].destination;
        time = user[0].time;
        users = user.length;
    });

      
    res.render('pool.ejs',{destination:destination, time:time, users:users, name:name});
}
exports.getStep1 = (req, res, next) =>{
    res.render('step1.ejs')
}
exports.getStep2 = (req, res, next) =>{
    res.render('step2.ejs')
}
exports.getStep3 = (req, res, next) =>{
    res.render('step3.ejs')
}
exports.getTrans = (req, res, next) =>{
    res.render('trans.ejs')
}