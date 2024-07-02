//import mongoose module
const mongoose =require("mongoose");
//create match schema 
const matchSchema =mongoose.Schema({
    scoreOne:Number,
    scoreTow:Number,
    teamOne:String,
    teamTow:String
});
//affeect name to matchSchema 
const match =mongoose.model("Match",matchSchema);
//make model exportable
module.exports=match;