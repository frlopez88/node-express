const express = require('express')
const app = express()
app.use(express.json())
const db = require('./cn.js')


app.get('/people', async function (req, res) {

   const sql = 'select * from people'
   const result = await db.default.query(sql)
   res.status(200).json(result)

})

app.post('/people', async (req, res)=>{

    const tmp  =  req.body
    const str = 'insert into people (name, last_name, age) values ($1, $2, $3)'
    const arr = [ tmp.name, tmp.last_name, tmp.age ]
    const result  = await db.default.query(str, arr)
    res.status(200).json({message:"Person Created"})

} )

app.listen(3000)