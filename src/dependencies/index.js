const taskController = require('../controllers/taskController');
const taskRepository = require('../repository/taskRepository');
const taskService = require('../services/taskService');

const {Task, Sequelize, sequelize} = require('../models');

const taskRepositoryOb=new taskRepository(Task);
const taskServiceOb = new taskService(taskRepositoryOb);
const taskControllerOb = new taskController(taskServiceOb);

module.exports = {
    Sequelize, sequelize, taskControllerOb
};