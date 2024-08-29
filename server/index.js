require('dotenv').config();
const express = require('express');
const connection = require('./database/connection.js');
const app = express()
const port = process.env.PORT || 2000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

connection().then(()=>{
  app.listen(port, () => {
    console.log(`Server is listen on PORT No. ${port}`)
  })
});
