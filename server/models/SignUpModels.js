const mongoose = require('mongoose');
const validator = require("validator");
const signUpTemplate = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email id")
            }
        }
    },
    message:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const Myregister = new mongoose.model('Myregister', signUpTemplate)
module.exports = Myregister;
// module.exports = mongoose.model('Myregister', signUpTemplate);