const express = require("express")
const server = express()

//setting my application steps

//initial page
//req = request res = answer
server.get("/", (req, res) =>{
    res.send("Hello world!")
})
//on server
server.listen(3000)
