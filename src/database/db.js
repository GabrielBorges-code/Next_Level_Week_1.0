//import depedence of sqlite
const sqlite3 = require("sqlite3").verbose()

//create the object that will make operating from the data base
const db = new sqlite3.Database("./src/database/database.db")

//Export the object to be used elsewhere
module.exports = db
//use the object of db, for our operetion
//make db
//commands sql 
//1 create database
/*  db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)
    //2 insert data
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
        "https://images.unsplash.com/photo-1481761289552-381112059e05?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=861&q=80%22%20alt=%22Colectoria%22%3E%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ch1%3EColectoria",
        "Residuos Eletrônicos, Lâmpadas",
        "Guilherme Gemballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
   ]

   function afterInsertData(err) {
    if(err) {
        return console.log(err)
    }

    console.log("Cadastrado com sucesso")
    console.log(this)
}

    db.run(query, values, afterInsertData)

    //3 consult data of table
     db.all(`SELECT name FROM places`, function(err, rows){
        if(err) {
            return console.log(err)
        }

        console.log("Aqui estão seus registros")
        console.log(rows)
    }) 
    //4 Delete data of table
     //db.run(`DELETE FROM PLACES  WHERE id = ?`, [5], function (err){
       // if(err) {
            return console.log(err)
        //}
        //console.log("Registros deletados com sucesso")
    //}) 

}) */