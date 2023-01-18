const Task = require('../models/task')

const getAllTasks = (req,res)=>{
    res.status(200).send('All items')
}
const createTask = async(req,res)=>{
    const task = await Task.create(req.body)
    res.status(201).json(task)
}
const getTask = (req,res)=>{
    res.status(200).json({id:req.params.id})
}
const updateTask = (req,res)=>{
    res.status(200).json({id:req.params.id})
}
const deleteTask = (req,res)=>{
    res.status(200).send("Deleted Successfully")
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}