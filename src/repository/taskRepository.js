const Interface = require('es6-interface');
const baseRepository = require('./baseRepository');

class taskRepository extends Interface(baseRepository) {
    constructor(Task) {
        super();
        this.Task=Task;
    }

    async list () {
    }

    async listByUserId (res) {        
        const tasks = await this.Task.findAll({ 
            attributes: ['id', 'description', 'status'],
            where: {
                id_user: res.userData.idUser
            }
     });
        return tasks;
    }

    

    async add (params) {
    }

    async addWithUser (params, res) {
        const task = await this.Task.create({...params, id_user: res.userData.idUser});
        return task;
    }

    update (params) {
    }

    delete (params) {
    }
}

module.exports = taskRepository;