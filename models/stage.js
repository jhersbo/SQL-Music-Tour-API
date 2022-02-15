'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stage extends Model {
    static associate({ Event, StageEvent, SetTime }) {
      // events
      stage.belongsToMany(Event, {
        foreignKey: "stage_id",
        as: "events",
        through: StageEvent
      })
      stage.hasMany(SetTime, {
        foreignKey: "stage_id",
        as: "set_times"
      })
    }
  }
  stage.init({
    stage_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    stage_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'stage',
    tableName: 'stage',
    timestamps: false
  });
  return stage;
};