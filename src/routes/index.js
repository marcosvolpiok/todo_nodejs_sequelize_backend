const router = require('express').Router();
const Joi = require('joi');
const moment = require('moment');
const {
    taskControllerOb,
    userControllerOb
} = require('../dependencies/');
const checkAuth = require('../middlewares/checkAuth');

router.get('/tasks/', checkAuth, taskControllerOb.list);
router.put('/tasks/', checkAuth, addTask, taskControllerOb.add);

router.put('/user/', userControllerOb.add);
router.post('/user/login/', userControllerOb.login);

function addTask(req, res, next){
    const schema = Joi.object({
        description: Joi.string().required()
    });
    validateRequest(req, next, schema);
}


function validateRequest(req, next, schema) {
    const options = {
        abortEarly: false, // include all errors
        allowUnknown: true, // ignore unknown props
        stripUnknown: true // remove unknown props
    };
    let params;

    if(Object.keys(req.body).length>0){
        params=req.body;

    }else{
        params=req.params;
    }

    const { error, value } = schema.validate(params, options);

    if (error) {
        next(`Validation error: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        req.body = value;
        next();
    }
}






module.exports = router;