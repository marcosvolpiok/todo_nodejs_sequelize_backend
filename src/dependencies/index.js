const serverController = require('../controllers/serverController');
const messageController = require('../controllers/messageController');
const serverRepository = require('../repository/serverRepository');
const messageRepository = require('../repository/messageRepository');
const taskRepository = require('../repository/taskRepository');
const serverService = require('../services/serverService');
const messageService = require('../services/messageService');
const taskService = require('../services/taskService');


const {Message, Server, Task, Sequelize, sequelize} = require('../models');
const serverRepositoryOb=new serverRepository(Server);
const serverServiceOb = new serverService(serverRepositoryOb);
const serverControllerOb = new serverController(serverServiceOb);

const messageRepositoryOb=new messageRepository(Message, Server, Sequelize, sequelize);
const messageServiceOb=new messageService(messageRepositoryOb);
const messageControllerOb = new messageController(messageServiceOb);

const taskRepositoryOb=new taskRepository(Task);
const taskServiceOb = new taskService(taskRepositoryOb);
const taskControllerOb = new serverController(taskServiceOb);

module.exports = {
    Sequelize, sequelize, serverRepositoryOb, serverControllerOb, messageRepositoryOb, messageControllerOb, taskControllerOb
};