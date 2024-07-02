//import mongoose module
const mongoose =require("mongoose");
//create match schema 
const teamSchema =mongoose.Schema({
    name:String,
    owner:String,
    foundation:Number,
  
});
//affeect name to matchSchema 
const team =mongoose.model("Team",teamSchema);
//make model exportable
module.exports=team;