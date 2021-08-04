const Task = require('../model/Task')
const asyncWrapper = require('../middleware/async')

const getAllTask = asyncWrapper(async (req,res)=>{

        const tasks = await Task.find({})
        res.status(200).json({tasks})
    
})

const createTask = asyncWrapper(async (req,res)=>{
        return res.status(201).json({task})

})

const getSingleTaskByID = asyncWrapper(async (req,res)=>{
 
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})
        //status 201 is successfull post request
        if(!task){
            return res.status(404).json({msg:`Task id with ${taskId} doesn't exit`})
        }
        return res.status(201).json({task})

})

const updateSingleTaskByID = asyncWrapper(async (req,res)=>{
    tr
        const {id:taskId}= req.params
        const task = await Task.findByIdAndUpdate({_id:taskId},req.body,{
            new:true,
            runValidators:true
        })

        if(!task){
            return res.status(404).json({msg:`Task id with ${taskId} doesn't exit`})
        }

        res.status(200).json({task})

})

const deleteSingleTaskByID = asyncWrapper (async (req,res)=>{

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
})

module.exports = {
    getAllTask,
    createTask,
    getSingleTaskByID,
    updateSingleTaskByID,
    deleteSingleTaskByID



}