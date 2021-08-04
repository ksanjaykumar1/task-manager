const { exists } = require("../model/Task")

const notfound=(req,res)=>{

    res.status(404).send("Route Doesn't exists")
}

module.exports= notfound;