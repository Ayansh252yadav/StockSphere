const {model}=require("mongoose");

const {WatchListSchema}=require('../schema/WatchListSchema');

const {watchListModel}=new model("watchList",WatchListSchema);

module.exports={watchListModel};