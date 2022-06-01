'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class itemTag extends Model {

    static associate(models) {
      itemTag.belongsTo(models.todoItem, { foreignKey: 'todoItemId' });
      itemTag.belongsTo(models.tag, { foreignKey: 'tagId' });
    }
  }
  itemTag.init({
    todoItemId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'itemTag',
  });
  return itemTag;
};