const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.json');

class Category extends Model {}

Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Category',
        timestamps: false
    }
);

module.exports = Category;
