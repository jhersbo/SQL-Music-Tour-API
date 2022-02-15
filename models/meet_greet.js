'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class meet_greet extends Model {
    static associate({ Band, Event }) {
      // band
      meet_greet.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      meet_greet.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })
    }
  }
  meet_greet.init({
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    band_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    meet_start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    meet_end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    meet_greet_id: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true
    },
  }, {
    sequelize,
    modelName: 'meet_greet',
    tableName: 'meet_greet',
    timestamps: false
  });
  return meet_greet;
};