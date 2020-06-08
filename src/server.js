const express = require("express")
const server = express()

//take the data base
const db = require("./database/db.js")

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
    //take data in database
    db.all(`SELECT name FROM places`, function(err, rows){
        if(err) {
            return console.log(err)
        }

        console.log(rows)
        //show the page html with the data of database
        return res.render("search-results.html", { places: rows })
    }) 
    
})

//on server 
server.listen(3000)
