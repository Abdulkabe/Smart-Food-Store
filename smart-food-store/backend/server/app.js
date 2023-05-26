const dotenv = require('dotenv')
const mongoose = require('mongoose');
const PORT = process.env.PORT
dotenv.config({path:'./config.env'});



global.foodData = require('./db/conn')(function call(err, data, CatData) {
    // console.log(data)
    if(err) console.log(err);
    global.foodData = data;
    global.foodCategory = CatData;
  })
  
  const express = require('express')
  const app = express();
  const port = 8080;
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
  app.use(express.json())
  
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
  app.use('/api/', require("./router/createUser"));
  app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`)
  })