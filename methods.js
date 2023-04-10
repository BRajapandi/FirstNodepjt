const {Client} = require('pg');

const con = new Client({
    host:'localhost',
    user:'postgres',
    port:5432,
    password:'postgres@1999',
    database:'postgres'
})

con.connect((err,res)=>{
console.log("res");
});


const getBooks=async()=>{
    let getbooks=null;
    await new Promise(function(myResolve, myReject) {
        con.query('select * from book b ',(err,res)=>{
        if(!err){
            myResolve(res.rows);
        }else{
            console.log("error",err);
            myReject(err);
        }
    })}).then((datas)=>getbooks=datas)
  return getbooks;
}

const updateBook=async()=>{
    let getbooks=null;
    await new Promise(function(myResolve, myReject) {
        con.query(`update book set description='Dummy developer' where id=2`,(err,res)=>{
        if(!err){
            myResolve(res.rows);
        }else{
            console.log("error",err);
            myReject(err);
        }
    })}).then((datas)=>getbooks=datas)
  return getbooks;
}
module.exports.getBooks = getBooks;
module.exports.updateBook = updateBook;