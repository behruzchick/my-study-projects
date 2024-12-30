const mongoose = require('mongoose');



const userSchema = mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    passwordHash:{
        type:String,
        unique:true
    },
})

const userModel = mongoose.model('User',userSchema);

module.exports = {
    userModel
}