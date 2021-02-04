const { Router } = require('express');
const { taskController } = require('./../controllers');
const { reducePagination } = require('./../middleware');

const taskRouter = Router();

taskRouter
  .route('/')
  .post(taskController.createTask)
  .get(reducePagination, taskController.getMany);

/* taskRouter
  .route('/:taskId')
  .get(taskController.getTask)
  .patch(taskController.updateTask)
  .delete(taskController.removeTask); */

module.exports = taskRouter;
