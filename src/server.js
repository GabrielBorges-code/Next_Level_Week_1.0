const express = require ("express");
const server = express ();

// take the database
const db = require("./database/db");

//configure public folder
server.use(express.static("public"));

//enable req.body on aplication
server.use(express.urlencoded({ extended: true }));

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

server.post("/savepoint", (req, res) =>{
    
    //insert data in batabase
        const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
    ) VALUES (?,?,?,?,?,?,?);
`
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
   ]

    function afterInsertDate(err){
        if(err){
            console.log(err);
            return res.render("Erro no cadastro!")
        };

        console.log("Informações cadastradas");
        console.log(this);

        return res.render("create-point.html", { saved: true});    
    };

    db.run(query, values, afterInsertDate);

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