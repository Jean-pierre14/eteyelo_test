const exp = require('express')
const router = exp.Router()
const connection = require('../models/db')

router.get('/', async (req, res)=>{
    let sql = `SELECT * FROM users`;
    await connection.query(sql, (err, results)=>{
        if(err) throw err
        res.send(results)
    })
})

router.get('/add', async (req, res, next)=>{
    const {name, email, phone_no} = req.query
    let sql = `INSERT INTO users(name, email, phone_no) VALUES('${name}', '${email}', '${phone_no}')`
    connection.query(sql, (err, result)=>{
        if(err) throw err
        res.send('user added')
    })
    res.send('add users')
})

router.get('/edit/:id', async (req, res, next)=>{
    let id = req.params.id
    let sql = `SELECT * FROM users WHERE id = ${id}`

    await connection.query(sql, (err, result)=>{
        if(err) throw err
        res.json({data: result})
    })
})

module.exports = router