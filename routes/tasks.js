const express = require('express')
const router = express.Router();
const {getAllTask,
    createTask,
    getSingleTaskByID,
    updateSingleTaskByID,
    deleteSingleTaskByID} = require('../controllers/tasks')

router.get('/',getAllTask)

router.post('/',createTask)

router.get('/:id',getSingleTaskByID)

router.patch('/:id',updateSingleTaskByID)

router.delete('/:id',deleteSingleTaskByID)

module.exports= router