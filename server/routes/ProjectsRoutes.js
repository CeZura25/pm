const express = require("express");
const router = express();
const {
    getAllProjects,
    getSingleProject,
    createProject,
    updateProject,
    deleteProject
} = require('../controllers/ProjectController')
const {
    validateProject,
    validateProjectIdParam,     
} = require ('../middleware/validationMiddleware')


//get all projects
router.get('/',getAllProjects)

//get a single project
router.get('/:id',validateProjectIdParam,getSingleProject)

//create a new project
router.post('/',validateProject,createProject)

//update a project data
router.patch('/:id',validateProject,validateProjectIdParam,updateProject)

//delete a project
router.delete('/:id',validateProjectIdParam,deleteProject)

module.exports = router;
