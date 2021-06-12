const bcrypt = require('bcrypt');
const loginHelper = require('../helpers/loginHelper');

const taskController = require('../controllers/taskController');
const taskRepository = require('../repository/taskRepository');
const taskService = require('../services/taskService');

const userController = require('../controllers/userController');
const userRepository = require('../repository/userRepository');
const userService = require('../services/userService');

const {User, Task, Sequelize, sequelize} = require('../models');

const taskRepositoryOb=new taskRepository(Task);
const taskServiceOb = new taskService(taskRepositoryOb);
const taskControllerOb = new taskController(taskServiceOb);

const userRepositoryOb=new userRepository(User, Sequelize, sequelize);
const userServiceOb = new userService(userRepositoryOb, bcrypt, loginHelper);
const userControllerOb = new userController(userServiceOb);

module.exports = {
    Sequelize, sequelize, taskControllerOb, userControllerOb
};