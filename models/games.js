const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GamesSchema = Schema({
  title: {
    type:String,
    required:true,
    unique: true
  },
description: {
    type:String,
    required:true,
    unique: true
  },
img: {
    type:String,
    required:true,
    unique: true
  },
  trailer: {
    type:String,
    required:true,
    unique: true
  },
cost: {
    type:String,
    required:true,
  },
category: {
    type:String,
    required:true,
  },
platform: {
    type:String,
    required:true,
  },
release: {
    type:String,
    required:true,
  },
 publisher : {
    type:String,
    required:true,
  },
})

const Games = mongoose.model("Game",GamesSchema);

module.exports = Games