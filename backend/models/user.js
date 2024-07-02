//import mongoose module
const mongoose =require("mongoose");
//create match schema 
const userSchema =mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    password:String
  
});
//affeect name to matchSchema 
const user =mongoose.model("User",userSchema);
//make model exportable
module.exports=user;