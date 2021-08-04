const connectDB = require('./db/connection')
const express = require('express');
const app = express()
const tasks = require('./routes/tasks')
const notFound= require('./middleware/not-found')
const errorHandlerMiddleware =require('./middleware/error-handler')
// to get secret variable, then we are ivoking config
require('dotenv').config()

// set port number to the environment vairable PORT or if there is nothing there than 3000
const port = process.env.PORT || 3000


// to json data in req.body
app.use(express.json({extended:false}))
// to connect to frontend
app.use(express.static('./public'))

// custom 404 response


//routes
app.use('/api/v1/tasks',tasks)

// custom middleware
app.use(notFound)
app.use(errorHandlerMiddleware)

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