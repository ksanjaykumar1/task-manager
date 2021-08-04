const Task = require('../model/Task')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

const getAllTask = asyncWrapper(async (req,res,next)=>{

        const tasks = await Task.find({})
        res.status(200).json({tasks})
    
})

const createTask = asyncWrapper(async (req,res,next)=>{
        const task = await Task.create(req.body)
        return res.status(201).json({task})

})

const getSingleTaskByID = asyncWrapper(async (req, res, next) => {
    const { id: taskID } = req.params
    const task = await Task.findOne({ _id: taskID })
    if (!task) {
        // console.log(`No task with id: ${taskID}`)
        return next(createCustomError(`No task with id: ${taskId}`,404))
        //return  res.status(400).json({ msg:`No task with id: ${taskID}` })
    }
  
    res.status(200).json({ task })
  })

const updateSingleTaskByID = asyncWrapper(async (req,res,next)=>{
    
        const {id:taskId}= req.params
        const task = await Task.findOneAndUpdate({_id:taskId},req.body,{
            new:true,
            runValidators:true
        })

        if(!task){
            return next(createCustomError(`No task with id : ${taskId}`, 404))
        }

        res.status(200).json({task})

})

const deleteSingleTaskByID = asyncWrapper (async (req,res,next)=>{

        const {id:taskId}= req.params
        const task = await Task.findOneAndDelete({_id:taskId})

        if(!task){
            return next(createCustomError(`No task with id : ${taskId}`, 404))
        }

        res.status(200).json({task})

})

module.exports = {
    getAllTask,
    createTask,
    getSingleTaskByID,
    updateSingleTaskByID,
    deleteSingleTaskByID



}