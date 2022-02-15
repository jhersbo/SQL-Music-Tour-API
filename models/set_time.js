'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class set_time extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate({ Band, Event, Stage }) {
      // band
      set_time.belongsTo(Band, {
        foreignKey: "band_id",
        as: "band"
      })

      // event
      set_time.belongsTo(Event, {
        foreignKey: "event_id",
        as: "event"
      })

      // stage 
      set_time.belongsTo(Stage, {
        foreignKey: "stage_id",
        as: "stage"
      })
    }
  }
  set_time.init({
    event_id: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    stage_id: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    band_id: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    set_time_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  }, {
    sequelize,
    modelName: 'set_time',
    tableName: 'set_time',
    timestamps: false
  });
  return set_time;
};