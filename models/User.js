const mongoose = require("mongoose")

<<<<<<< HEAD
const UserSchema = new mongoose.Schema(
    {
=======
const UserSchema = new mongoose.Schema({
>>>>>>> d1eaae9 (Remove node_modules from repository)
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
<<<<<<< HEAD
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
    followers:{
        type:Array,
        default:[]
    },
    followings:{
        type:Array,
        default:[]
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
    }   , {timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);
=======
        unique:true,
        
    }
})
>>>>>>> d1eaae9 (Remove node_modules from repository)
