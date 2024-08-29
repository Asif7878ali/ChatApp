require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express()
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 2000
const connection = require('./models/Connection.js');
const authRoute = require('./routes/AuthRoute.js');

// middleware
server.use(cors({
  origin : [process.env.ORIGIN],
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  credentials : true
}));
server.use(cookieParser());
server.use(express.json());

//Routes
server.use('api/auth', authRoute);

//start server and connect database
connection().then(()=>{
  server.listen(port, () => {
    console.log(`Server is listen on PORT No. ${port}`)
  })
});
