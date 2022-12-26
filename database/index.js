const { Pool } = require('pg');

const pool = new Pool({
    user: "docker",
    host: "localhost",
    database: "test_db",
    password: "docker",
    port: 7778
}) 

module.exports = pool;
// pool.query("Create Table tagdata(tagId INT PRIMARY KEY, parentId TEXT, Name TEXT)", (err,res) => {
//     console.log(err,res);
//     pool.end();  
// })

// pool.query("SELECT * FROM tag", (err,res) => {
//     console.log(err,res);
//     pool.end();  
// })
// `CREATE TABLE Account(ID INT PRIMARY KEY NOT NULL,NAME TEXT NOT NULL,AMOUNT INT NOT NULL,MODIFICATION TIMESTAMPTZ DEFAULT NOW())`