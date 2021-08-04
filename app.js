const connectDB = require('./db/connection')
const express = require('express');
const app = express()
const tasks = require('./routes/tasks')
// to get secret variable, then we are ivoking config
require('dotenv').config()
const port =3000

// to json data in req.body
app.use(express.json({extended:false}))

app.get('/hello',(req,res)=>{
    res.send('Task manager')
})

app.use('/api/v1/tasks',tasks)

// the purpose of start function is to fail server if conncetion to mongodb is failed to establish
const start = async ()=>{
    
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`The server is listening on port ${port}...`)
        })
    }
    catch(err){
        
    }

}

start()