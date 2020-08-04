const express = require ("express");
const server = express ();

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
    return res.render("search-results.html");
});

//on server
server.listen(3000);