const express = require("express")
const server = express()

//setting public page
server.use(express.static("public"))

//setting my application steps
//initial page
//req = request res = answer
server.get("/", (req, res) =>{
    res.sendFile(__dirname + "/views/index.html")
})
server.get("/create-point", (req, res) =>{
    res.sendFile(__dirname + "/views/create-point.html")
})
server.get("/create-point", (req, res) =>{
    res.sendFile(__dirname + "/views/create-point.html")
})
server.get("/search-results", (req, res) =>{
    res.sendFile(__dirname + "/views/search-results.html")
})
//on server
server.listen(3000)
