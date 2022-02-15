'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    static associate({ Stage, StageEvent }) {
        // stages
        event.belongsToMany(Stage, {
            foreignKey: "event_id",
            as: "stages", 
            through: StageEvent
        })
    }
}
  event.init({
    event_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'event',
    tableName: 'event',
    timestamps: false
  });
  return event;
};