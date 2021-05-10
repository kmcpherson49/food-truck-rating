// id, truck name, truck rating, truck price
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Truck extends Model {}

Truck.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    truck_name: {
      type: DataTypes.STRING,
      allowNull: false,
      },
    rating: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    // post: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allownull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'truck'
  }
);

module.exports = Truck;
