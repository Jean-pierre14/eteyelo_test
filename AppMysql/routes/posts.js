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


router.get('/update/:id', async (req, res, next)=>{
    let id = req.params.id
    let { name, email, phone_no } = req.query
    let sql = `UPDATE users SET name = '${name}', email = '${email}', phone_no = '${phone_no}' WHERE id = '${id}'`

    await connection.query(sql, (err, result)=>{
        if(err) throw err
        res.send(`User ${id} updated`)
    })
})

router.get('/delete/:id', async (req, res, next)=>{
    let id = req.params.id
    let sql = `DELETE FROM users WHERE id = ${id}`

    await connection.query(sql, (err, result)=>{
        if(err) throw err
        res.send('Data deleted')
    })
})

module.exports = router