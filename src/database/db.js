//importando as dependencias do sqlite3
const sqlite3 = require("sqlite3").verbose();

//objeto que ira fazer as operações no bd
const db = new sqlite3.Database("./src/database/database.db");

module.exports = db

//using the database object
// db.serialize(() => {
//     //create table
// //     db.run(`
// //         CREATE TABLE IF NOT EXISTS places (
// //             id INTEGER PRIMARY KEY AUTOINCREMENT,
// //             image TEXT,
// //             name TEXT,
// //             address TEXT,
// //             address2 TEXT,
// //             state TEXT,
// //             city TEXT,
// //             items TEXT
// //         );
// // `)

// //     //insert data
// //     const query = `
// //         INSERT INTO places (
// //             image,
// //             name,
// //             address,
// //             address2,
// //             state,
// //             city,
// //             items
// //     ) VALUES (?,?,?,?,?,?,?);
// // `
// //     const values = [
// //         "https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
// //         "Papersider",
// //         "Guilherme Gemballa, Jardim América",
// //         "Número 260",
// //         "Santa Catarina",
// //         "Rio do Sul",
// //         "Papeis e Papelão"
// //    ]


// //     function afterInsertDate(err){
// //         if(err){
// //             return console.log(err);
// //         };

// //         console.log("Informações cadastradas");
// //         console.log(this);

// //     };

// //     db.run(query, values, afterInsertDate);

//     //query data
//     // db.all(`SELECT name FROM places`, function(err, rows){
//     //     if(err){
//     //         return console.log(err);
//     //     };
//     //     console.log("Registros da tabela")
//     //     console.log(rows)
//     // })
    
//     //delete data
//     // db.run(`DELETE FROM places WHERE id = ?`, [4], function(err){
//     //     if(err){
//     //         return console.log(err);
//     //     };
//     //     console.log("Registro deletado")
        
//     // })
// });
