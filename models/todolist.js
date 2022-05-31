'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todoList extends Model {

    static associate(models) {
      todoList.belongsTo(models.user, { foreignKey: 'userId' });
      todoList.hasMany(models.todoItem, { foreignKey: 'listId' });
    }
  }
  todoList.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'todoList',
  });
  return todoList;
};