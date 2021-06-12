'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  User.init({
    id: {type: DataTypes.SMALLINT, primaryKey: true, autoIncrement: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false,},
    mail: {type: DataTypes.STRING, allowNull: false,}
  }, {
    sequelize,
    modelName: 'User',
    timestamps: false,
    autoQueryFallback: true,

    hooks: {
        afterCreate: (record) => {
            delete record.dataValues.password;
        },
        afterUpdate: (record) => {
            delete record.dataValues.password;
        },
    }
  });
  return User;
};