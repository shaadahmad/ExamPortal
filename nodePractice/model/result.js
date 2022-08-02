const mongoose=require('mongoose')

const res=new mongoose.Schema({
    selectedAns:{
        type:Array,
        required:true,
    },
    score:{
        type:Number,
        required:true,
    },
    name:{
        type:String
    }
  

});

const Answers=mongoose.model("results",res);
module.exports=Answers;