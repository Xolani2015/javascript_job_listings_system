const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());

// mysql.createConnection({
//     host: "localhost",
//     user: "root", 
//     password: "", 
//     database: "joblistingsdb"
// })

const db =  mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "", 
    database: "joblistingsdb"
})

app.get("/", (req, res) => {
    const sql = "SELECT * FROM jobs";
    db.query(sql, (err, data) => { 
        if(err) return res.json("Error");
        return res.json(data);
    })

})
app.listen(8082, ()=> {
    console.log("listing");
})