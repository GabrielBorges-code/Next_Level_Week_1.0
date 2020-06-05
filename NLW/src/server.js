const express = require("express")
const server = express()

//setting public page
server.use(express.static("public"))

//using tamplate engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views",{
    express: server,
    noCache: true
})

//setting my application steps
//initial page
//req = request res = answer
server.get("/", (req, res) =>{
    return res.render("index.html")
})
server.get("/create-point", (req, res) =>{
    return res.render("create-point.html")
})
server.get("/search", (req, res) =>{
    return res.render("search-results.html")
})

//on server
server.listen(3000)
