console.log("Hello")
require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/email',(req, res)=>{
    res.send("shahzadaliarain2126@gmail.com")
})

app.get('/tag',(req,res)=>{
    res.send("<h1>Hello Shehzad Ali</h1>")
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})