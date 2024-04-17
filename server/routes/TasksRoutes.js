const express = require("express");
const router = express();
const {
  getAllTasks,
  getSingleTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/TaskController");
const {validateTask,validateTaskIdParam} = require ("../middleware/validationMiddleware") 


//get all Tasks
router.get("/", getAllTasks);

//get a single Task
router.get("/:id",validateTaskIdParam, getSingleTask);

//create a new Task
router.post("/",validateTask, createTask);

//update a Task data
router.patch("/:id",validateTaskIdParam,validateTask, updateTask);

//delete a Task
router.delete("/:id",validateTaskIdParam, deleteTask);

module.exports = router;
