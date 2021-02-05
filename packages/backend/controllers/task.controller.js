const { Task } = require('../models');

module.exports.createTask = async (req, res, next) => {
  const { body } = req;
  try {
    const createdTask = await Task.create(body);
    if (createdTask) {
      return res.status(201).send({ data: createdTask });
    }
    res.status(400).send('Bad request');
  } catch (err) {
    next(err);
  }
};

/* module.exports.getTask = async (req, res, next) => {
  const {
    params: { taskId }
  } = req;
  try {
    const foundTask = await Task.findByPk(taskId);
    if (foundTask) {
      return res.status(200).send(foundTask);
    }
    res.status(404).send('The task not found');
  } catch (err) {
    next(err);
  }
}; */

module.exports.getAllTasks = async (req, res, next) => {
  const {
    pagination: { page, results }
  } = req;
  try {
    const foundTasks = await Task.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
      limit: results,
      offset: (page - 1) * results
    });
    res.status(200).send({ data: foundTasks });
  } catch (err) {
    next(err);
  }
};
/* module.exports.updateTask = async (req, res, next) => {
  const {
    body,
    params: { taskId }
  } = req;
  try {
    const foundTask = await Task.findByPk(taskId);
    if (foundTask) {
      const updatedTask = await foundTask.update(body);
      return res.status(200).send(updatedTask);
    }
    res.status(404).send('The task not found');
  } catch (err) {
    next(err);
  }
};
module.exports.removeTask = async (req, res, next) => {
  const {
    params: { taskId }
  } = req;
  try {
    const removedTask = await Task.delete(taskId);
    if (removedTask) {
      return res.status(200).send(removedTask);
    }
    return res.status(404).send('Task not found');
  } catch (err) {
    next(err);
  }
};
 */
