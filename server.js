const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/routes")
require('dotenv').config();

const DB = process.env.DB

const cors = require("cors")

const app = express();



mongoose.connect(DB)
.then(()=>{
  console.log("connected")
  app.listen(process.env|2560)
  
})

app.use(cors());
app.use(express.json());
app.use("/api/playstation/",router)
