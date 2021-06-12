const Interface = require('es6-interface');
const baseRepository = require('./baseRepository');

class taskRepository extends Interface(baseRepository) {
    constructor(Task) {
        super();
        this.Task=Task;
    }

    async list () {
        const tasks = await this.Task.findAll({ attributes: ['id', 'description', 'status'] });
        return tasks;
    }

    async add (params) {
        const task = await this.Task.create(params);
        return task;
    }

    update (params) {
    }

    delete (params) {
    }
}

module.exports = taskRepository;