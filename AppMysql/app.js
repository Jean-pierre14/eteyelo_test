const express = require("express");
const port = 7000
const cors = require("cors")
const mysql = require("mysql")
const app = express()

const posts = require('./routes/posts')
const connection = require('./models/db')


app.use(cors());
// const selectUser = "SELECT INTO `users` ORDER BY id DESC";

// Routes
app.get("/", (req, res) => {
    res.send("REACTJS API");
});

app.use('/api', posts)

app.get("/users", (req, res) => {
    let sql = "select * from users";
    connection.query(sql, (err, results) => {
        if (err) {
            return err;
        } else {
            return res.json({
                data: results,
            });
        }
    });
});

app.get("/users/add", (req, res) => {
    const { name, email, phone } = req.query;
    let insert_User = `INSERT INTO users(name, email, phone) VALUES('${name}', '${email}', '${phone}')`;
    connection.query(insert_User, (err, results) => {
        if (err) {
            return err;
        } else {
            return res.send("successfully added User");
        }
    });
});

// edit page
app.get("/edit/:userId", (req, res) => {
    let userId = req.params.userId;
    let sql = `SELECT * FROM users WHERE id =  ${userId}`;
    connection.query(sql, (err, result) => {
        res.render("edit", { user: result[0] });
    });
});

// delete page
app.get("/delete/:userId", (req, res) => {
    let userId = req.params.userId;
    let sql = `DELETE FROM users WHERE id = '${userId}'`;
    let query = connection.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect("/");
    });
});

// Routes End

// Server Settings
app.listen(port, () => {
    console.log("Server run on port: " + port);
});