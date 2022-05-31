'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class todoItem extends Model {

    static associate(models) {
      todoItem.belongsTo(models.todolist, { foreignKey: 'listId' });
    }
  }
  todoItem.init({
    task: DataTypes.STRING,
    deadline: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'todoItem',
  });
  return todoItem;
};