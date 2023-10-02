const mongoose=require("mongoose");

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    mobile:{
        type:Number,
        require:true
    },
    image:[{
        type:String
    }]
});

const enterData=mongoose.model("user",userSchema);
module.exports=enterData;