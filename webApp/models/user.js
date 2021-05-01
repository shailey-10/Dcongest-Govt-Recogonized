const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    name:{
        type: String,
        required:true
    },

    current:{
        type:String
    }
    ,
    destination:{
        type:String
    },
    time:{
        type:String
    },
    days:{
        type: String
    }

});

module.exports = mongoose.model('User',userSchema);