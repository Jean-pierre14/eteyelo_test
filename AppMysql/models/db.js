const mysql = require('mysql')
const connection = mysql.createConnection({
    host: "localhost", 
    user: "root",
    password: "",
    database: "node",
})

connection.connect((e) => {
    if (e) throw e
    console.log("Database connected: to >> Node")
})

module.exports = connection