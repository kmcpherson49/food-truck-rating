
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Reviews extends Model { }

Reviews.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        review: {
            type: DataTypes.INTEGER,
            allowNull: false,
            max:5,
            min:1
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
        modelName: 'reviews'
        }
);

module.exports = Reviews;