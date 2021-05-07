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
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id'
      }
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
