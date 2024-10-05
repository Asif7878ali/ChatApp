require('dotenv').config();
const express = require('express');
const cors = require('cors');
const server = express()
const setupSocket = require('./Socket.js')
const http = require('http');

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
// console.log(process.env.ORIGIN);
server.use(cookieParser());
server.use(express.json({ limit: '100mb' }));
server.use(express.urlencoded({ limit: '100mb', extended: true }));

//Routes
server.use('/api/auth', authRoute);

server.get('/',(req, res )=>{
    return res.send('hello');
})
//start server and connect database
connection().then(()=>{
   // Create an HTTP server from the express server
   const httpServer = http.createServer(server);
 // Start the HTTP server
 httpServer.listen(port, () => {
  console.log(`Server is listening on PORT No. ${port}`);
});
setupSocket(httpServer);
});

