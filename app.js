const express = require("express");

const app = express();

app.use(function(req,res){
  res.send(`request: ${req.url}`);
})


app.listen(80,function(){
  console.log(`${this.address()}`);
})