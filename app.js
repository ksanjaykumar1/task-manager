const express = require('express');
const app = express()
const tasks = require('./routes/tasks')

const port =3000

// to json data in req.body
app.use(express.json({extended:false}))

app.get('/hello',(req,res)=>{
    res.send('Task manager')
})

app.use('/api/v1/task',tasks)

app.listen(port,()=>{
    console.log(`The server is listening on port ${port}...`)
})