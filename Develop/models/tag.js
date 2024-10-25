const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.json');

class Tag extends Model {}

Tag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        tag_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'Tag',
        timestamps: false
    }
);

module.exports = Tag;
