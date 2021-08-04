const mongoose = require('mongoose')
// if database TASK-MANAGER is not created then it will automatically create it


const connectDB = (url)=>{
return mongoose
.connect(url,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false,
    useUnifiedTopology:true
})
}

module.exports = connectDB

