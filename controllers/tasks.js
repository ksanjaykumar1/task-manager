const Task = require('../model/Task')

const getAllTask =async (req,res)=>{
    try{
        // To get all the tasks we send empty object 
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    }
    catch(err){
        res.status(500).json({msg:err})
    }
}

const createTask = async (req,res)=>{
    try{
        const task = await Task.create(req.body)
        //status 201 is successfull post request
        return res.status(201).json({task})
    }
    catch(err){
        return res.status(500).json({msg:err})
    }


}

const getSingleTaskByID = async (req,res)=>{
    try{
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        //status 201 is successfull post request
        if(!task){
            return res.status(404).json({msg:`Task id with ${taskId} doesn't exit`})
        }
        return res.status(201).json({task})
    }
    catch(err){
        return res.status(500).json({msg:err})
    }

}

const updateSingleTaskByID =async (req,res)=>{
    try{
        const {id:taskId}= req.params
        const task = await Task.findByIdAndUpdate({_id:taskId},req.body,{
            new:true,
            runValidators:true
        })

        if(!task){
            return res.status(404).json({msg:`Task id with ${taskId} doesn't exit`})
        }

        res.status(200).json({task})

    }
    catch(err){
        return res.status(500).json({msg:err})
    
    }

}

const deleteSingleTaskByID = async (req,res)=>{

    try{
        const {id:taskId}= req.params
        const task = await Task.findOne({_id:taskId})

        if(!task){
            return res.status(404).json({msg:`Task id with ${taskId} doesn't exit`})
        }

        res.status(200).json({task})

    }
    catch(err){
        return res.status(500).json({msg:err})
    }
}

module.exports = {
    getAllTask,
    createTask,
    getSingleTaskByID,
    updateSingleTaskByID,
    deleteSingleTaskByID



}