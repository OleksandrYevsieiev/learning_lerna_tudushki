'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {static associate (models) {}}

  Task.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      data: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notNull: true,
          notEmpty: true
        }
      },
      isDone: {
        allowNull: false,
        type: DataTypes.BOOLEAN
      },
    },
    {
      sequelize,
      modelName: 'Task',
      underscored: true,
      tableName: 'tasks'
    }
  );
  return Task;
};
