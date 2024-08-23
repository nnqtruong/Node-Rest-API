const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        require: true,
        min:3,
        max:20,
        unique:true
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique: true,
    },
    password:{
        type:String,
        require:true,
        min:6,
        unique:true,
    },
    profilePicture:{
        type: String,
        default:""
    },
    coverPicture:{
        type: String,
        default:""
    },
})