const express = require ("express");
const server = express ();

//configure public folder
server.use(express.static("public"));

//configure my page paths

//pages
server.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

server.get("/create-point", (req, res) => {
    res.sendFile(__dirname + "/views/create-point.html");
});

//on server
server.listen(3000);