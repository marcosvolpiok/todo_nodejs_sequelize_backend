const chai = require('chai');
const expect = chai.expect;
const taskController = require('../controllers/taskController');
const taskRepository = require('../repository/taskRepository');
const taskService = require('../services/taskService');
const SequelizeMock = require('sequelize-mock');


const DBConnectionMock = new SequelizeMock();
const res = {
  json: function(obj){
    if(obj.length>0){
      return obj[0].dataValues;
    }else{
      return obj.dataValues;
    }
  },
  userData: {idUser: 1}
}

describe("taskController", function() {
  it("should add a task to the db", async function() {
    const taskAdd={
        'id': 1,
        'description': 'My task 1'
    };
    const TaskMock = DBConnectionMock.define('tasks', taskAdd, {
        instanceMethods: {
        },
    });

    const taskRepositoryOb = new taskRepository(TaskMock);
    const taskServiceOb = new taskService(taskRepositoryOb);
    const taskControllerOb = new taskController(taskServiceOb);

    const req = {body: 'My task 1'}
    const addResult = await taskControllerOb.add(req, res);

    expect(addResult.id).to.equal(taskAdd.id);
    expect(addResult.description).to.equal(taskAdd.description);
  });


  it("should list a task from the db", async function() {
    const taskList=[{
        'id': 1,
        'description': 'My task 1',
        'id_user': 1
    },
    {
      'id': 2,
      'description': 'My task 2',
      'id_user': 1
    },
    ];
    const TaskMock = DBConnectionMock.define('tasks', taskList, {
        instanceMethods: {
        },
    });

    const taskRepositoryOb = new taskRepository(TaskMock);
    const taskServiceOb = new taskService(taskRepositoryOb);
    const taskControllerOb = new taskController(taskServiceOb);

    const req = {}
    const listResult = await taskControllerOb.list(req, res);

    expect(listResult[0].id).to.equal(taskList[0].id);
    expect(listResult[0].description).to.equal(taskList[0].description);
    expect(listResult[0].id_user).to.equal(taskList[0].id_user);
    
    expect(listResult[1].id).to.equal(taskList[1].id);
    expect(listResult[1].description).to.equal(taskList[1].description);
    expect(listResult[1].id_user).to.equal(taskList[1].id_user);
  });  

});