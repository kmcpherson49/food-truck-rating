
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model { }

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        review: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        truck_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'truck',
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