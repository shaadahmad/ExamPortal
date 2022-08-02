const mongoose=require('mongoose')

const reg=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:String
    },
    isAdmin:{
        type:Boolean
    }

});

const register=mongoose.model("RegisterUsers",reg);
module.exports=register;