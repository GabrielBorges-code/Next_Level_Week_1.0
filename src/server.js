const express = require ("express");
const server = express ();

// take the database
const db = require("./database/db");

//configure public folder
server.use(express.static("public"));

//tamplate engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
    express: server, 
    noCache: true
});

//configure my page paths

//pages
server.get("/", (req, res) => {
   return res.render("index.html",{ title: "Um título"});
});

server.get("/create-point", (req, res) => {
    return res.render("create-point.html");
});

server.get("/search", (req, res) => {
    //take data of database
    db.all(`SELECT * FROM places`, function(err, rows){
        if(err){
            return console.log(err);
        };
        // console.log("Registros da tabela")
        // console.log(rows)

        const total = rows.length

        //show the page html with database
        return res.render("search-results.html", {places: rows, total: total})
    })
});

//on server
server.listen(3000);