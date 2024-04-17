const { StatusCodes } = require("http-status-codes")
const User = require("../models/UserSchema")
const Project = require("../models/ProjectSchema")
const Task = require("../models/TaskSchema")


const getCurrentUser = async (req,res) =>{
    const user = await User.findOne({_id: req.user.userId})
    const userWithoutPassword = user.toJSON()
    res.status(StatusCodes.OK).json({user:userWithoutPassword})
}
const getApplicationStatus = async (req,res) =>{
    const users = await User.countDocuments()
    const projects = await Project.countDocuments()
    const tasks = await Task.countDocuments()
    res.status(StatusCodes.OK).json({users,projects,tasks})
}
const updateUser = async (req,res) =>{
    const obj = {...req.body}
    delete obj.password
    const updatedUser = await User.findByIdAndUpdate(req.user.userId,{obj})
    res.status(StatusCodes.OK).json({msg:"user profile updated!"})
}

module.exports = { getApplicationStatus,getCurrentUser,updateUser}