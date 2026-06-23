const {model, default: mongoose} =require("mongoose");

const {Holdingsschema}=require('../schema/Holdingsschema');

const HoldingsModel=new model("holding",Holdingsschema);

module.exports={HoldingsModel};