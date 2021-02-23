const { Router } = require('express');
const { taskController } = require('./../controllers');
const  {reducePagination}  = require('./../middleware');

const taskRouter = Router();

taskRouter
  .route('/')
  .post(taskController.createTask)
  .get(reducePagination, taskController.getAllTasks);

taskRouter
  .route('/:id')
  .delete(taskController.removeTask);

module.exports = taskRouter;
