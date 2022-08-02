const mongoose=require('mongoose')

const ques=new mongoose.Schema({
    Question:{
        type:String,
        required:true,
    },
    a:{
        type:String,
        required:true,
    },
    b:{
        type:String,
        required:true,
    },
    c:{
        type:String,
        required:true,
    },
    d:{
        type:String,
        required:true,
    },
    ans:{
        type:String,
        required:true,
    },

});

const addQues=mongoose.model("Questions",ques);
module.exports=addQues;