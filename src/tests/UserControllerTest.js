const chai = require('chai');
const expect = chai.expect;
const bcrypt = require('bcrypt');
const loginHelper = require('../helpers/loginHelper');
const userController = require('../controllers/userController');
const userRepository = require('../repository/userRepository');
const userService = require('../services/userService');
const userModel = require('../models/user');
const SequelizeMock = require('sequelize-mock');


const DBConnectionMock = new SequelizeMock();
const res = {
  json: function(obj){
    if(obj.length>0){
      return obj[0].dataValues;
    }else if(obj.hasOwnProperty('dataValues')){
      return obj.dataValues;
    }else{
      return obj;
    }
  },
  userData: {idUser: 1},
  status: function(httpCode){
    return this;
  },
  send: function (obj){
    return obj;
  }
}

describe("userController", function() {
  it("should add a user to the db", async function() {
    
    const userAdd={
    };
    
    const UserMock = DBConnectionMock.define('users', userAdd, {
        autoQueryFallback: false,
        instanceMethods: {
        },
    });
    /*
    UserMock.$queueResult([
      UserMock.build({
        id: 1,
        mail: "2@2.com"
      }),
      UserMock.build({
        id: 2,
        userName: "3@3.com"
      })
    ]);
*/
    
    UserMock.$queryInterface.$useHandler(function(query, queryOptions, done) {
      if (query === 'findAll') {
          if (queryOptions[0].where.mail === 'exampleeee@example.com') {
              // Result found, return it
              return [];
              //return UserMock.build(null);
          } else {
              // No results
              return null;
          }
      }
  });
  

    const userRepositoryOb = new userRepository(UserMock);
    const userServiceOb = new userService(userRepositoryOb, bcrypt, loginHelper);
    const userControllerOb = new userController(userServiceOb);

    const req = {body: {
      password: 'xxu23kn23.3ss',
      mail: 'exampleeee@example.com'
    }}
    const addResult = await userControllerOb.add(req, res);

    
    expect(addResult.mail).to.equal(req.body.mail);
    
  });

  it("should return error 'user already exists'", async function() {
    
    const userAdd={
    };
    
    const UserMock = DBConnectionMock.define('users', userAdd, {
        instanceMethods: {
        },
    });

    const userRepositoryOb = new userRepository(UserMock);
    const userServiceOb = new userService(userRepositoryOb, bcrypt, loginHelper);
    const userControllerOb = new userController(userServiceOb);

    const req = {body: {
      password: 'xxu23kn23.3ss',
      mail: 'exampleeee@example.com'
    }}
    const addResult = await userControllerOb.add(req, res);
    
    expect(addResult.status).to.equal('USER_ALREADY_EXISTS');
    
  });


  it("should Not login a user", async function() {
    
    const userAdd={
      password: 'xxu23kn23.3ss'
    };
    
    const UserMock = DBConnectionMock.define('users', userAdd, {
        instanceMethods: {
        },
    });

    const userRepositoryOb = new userRepository(UserMock);
    const userServiceOb = new userService(userRepositoryOb, bcrypt, loginHelper);
    const userControllerOb = new userController(userServiceOb);

    const req = {body: {
      password: 'xxu23kn23.3ss',
      mail: 'exampleeee@example.com'
    }}
    const loginResult = await userControllerOb.login(req, res);
    expect(loginResult.status).to.equal('LOGIN_WRONG');
    
  });
});