const express = require("express")
const router = express.Router()
require('dotenv').config();
const Games = require("../models/games")
const API_key = process.env.API_key
router.get("/", async (req,res)=>{
  const game = await Games.find({})
  res.json(game)

})
  //get all Action games
router.get("/:category", async (req,res)=>{
  
  const Trending = []
  const responseEl = []
  const {category} = req.params
  const game = await Games.find({})
 game.forEach(gam=>{
    if(gam.category == category){
      responseEl.push(gam)
}
})
//trending
game.forEach(gam=>{
  if(gam.title == 'GRID Legends' || gam.title == 'The Last of Us Part II' || gam.title =='Madden NFL 24' || gam.title == 'Marvel’s Spider-Man 2' || gam.title == 'Call of Duty®: Modern Warfare® III - Cross-Gen Bundle' || gam.title == 'God of War Ragnarök' || gam.title == 'EA SPORTS FC 24' || gam.title == "Uncharted 4: A Thief's End"){
     Trending.push(gam)
   }
})
if(category == "popular"){
  res.json(Trending)
}else{

res.json(responseEl)
}

} )




//___________________\\\\\_____//
router.post("/",(req,res)=>{
  const queKey = req.headers["que-key"]
  if(QueKey == API_key){
  const {title,img,description,category,cost,trailer,platform,release,publisher} = req.body
  try{
    const newGame = new Games({
      title,img,description,category,cost,trailer,platform,release,publisher,
    })
    newGame.save()
        res.json(newGame)
  
  }catch(err){
    res.json({msg:err})
  }
}else{
  res.json({ERROR: "Wrong Api key request for key at musinguziwebdev@gmail.com"})
}
  
})

module.exports = router