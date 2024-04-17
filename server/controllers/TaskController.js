// const mongoose = require("mongoose");
const { StatusCodes } = require("http-status-codes");
const Tasks = require("../models/TaskSchema");

//gets all Tasks
const getAllTasks = async (req, res) => {
  const Task = await Tasks.find({createdBy:req.user.userId}).sort({ createdAt: -1 });
  res.status(200).json(Task);
};

//get a single Task by id
const getSingleTask = async (req, res) => {
  const Task = await Tasks.findById(req.params.id);
  res.status(200).json(Task);
};

//create a new Task
const createTask = async (req, res) => {
    req.body.createdBy = req.user.userId
    const newTask = await Tasks.create(req.body);
    res.status(StatusCodes.CREATED).json(newTask);

};

//Update a Task data
const updateTask = async (req, res) => {
  const Task = await Tasks.findOneAndUpdate({ _id: req.params.id }, { ...req.body });
  res.status(200).json(Task);
};
 
//delete a Task
const deleteTask = async (req, res) => {
  const Task = await Tasks.findOneAndDelete({ _id: req.params.id });
  res.status(StatusCodes.OK).json(Task);
};

module.exports = {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
};
