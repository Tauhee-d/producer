require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 8080
require("./db/connection");

// WebSocket

const router = express.Router()

app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
  req.io = io;
  return next();
});
// routes
app.use(require("./routes/userroute"));

const server = app.listen(port, () => {
    console.log(`Server is listening on port ${port}  `);
  });


  io=require('socket.io')(server,{
    cors:{
      origin:'*'
    }
  })

  // connection 
  io.on('connection',(socket)=> {
    console.log('connected to socket',socket.id)
  })