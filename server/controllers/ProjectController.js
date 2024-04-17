const Project = require("../models/ProjectSchema");
const {StatusCodes} = require ('http-status-codes')
const {
  NotFoundError
} = require ('../errors/customeErrors')


//gets all Projects
const getAllProjects = async (req, res) => {
  const project = await Project.find({createdBy:req.user.userId}).sort({ createdAt: -1 });
  res.status(StatusCodes.OK).json(project);
};

//get a single project by id
const getSingleProject = async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.status(StatusCodes.OK).json(project);
};

//create a new project
const createProject = async (req, res) => {
    req.body.createdBy = req.user.userId
    const newProject = await Project.create(req.body);
    res.status(StatusCodes.CREATED).json(newProject);

};

//Update a project data
const updateProject = async (req,res) => {

  const project = await Project.findOneAndUpdate({_id:req.params.id},{...req.body});
  res.status(StatusCodes.OK).json(project);
};

//delete a project 
const deleteProject = async (req, res) => {

  const project = await Project.findOneAndDelete({_id:req.params.id});
  res.status(StatusCodes.OK).json(project);
}



module.exports = {
  getAllProjects,
  getSingleProject,
  createProject,
  updateProject,
  deleteProject
};
