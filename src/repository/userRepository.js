const Interface = require('es6-interface');
const baseRepository = require('./baseRepository');

class userRepository extends Interface(baseRepository) {
    constructor(User, Sequelize, sequelize) {
        super();
        this.User=User;
        this.Sequelize=Sequelize;
        this.sequelize=sequelize;
        this.Op = this.Sequelize.Op;
        
    }

    async listByIdUser (idUser) {
        const user = await this.User.findAll({ attributes: ['id', 'id_cart', 'id_product', 'quantity'],
        where: {
            id: idUser 
        }
     });

     return user;
    }
    

    async list () {
        const user = await this.User.findAll();

        return user;
    }

    async find (params) {
        const user = await this.User.findAll(params);

        return user;
    }

    async findOne (params) {
        const user = await this.User.findOne(params);

        return user;
    }
    

    async add (params) {
        const userNew = await this.User.create({
            password: params.password,
            mail: params.mail
        });

        return userNew;
    }

    async update (params) {
    }

    async delete (params) {
    }
}

module.exports = userRepository;