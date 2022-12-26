const pool = require('../database/index');

 async function query(tagid,parentid,localename){
    const tagQuery = pool.query({text: "INSERT INTO tagdata(tagId,parentId,Name) VALUES($1, $2, $3)", values: [tagid,parentid,localename]}, (err,res)=> {
    console.log(err,res)
    return tagQuery;
})
}


 module.exports = query;
// var query = pool.query("INSERT INTO tag(tagId,parentId,Name) VALUES($1,$2,$3) ", (err,res)=> {
//     console.log(err,res)
//     pool.end();
// })
// return{
//     query
// }
