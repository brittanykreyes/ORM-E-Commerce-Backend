const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.json');

class ProductTag extends Model {}

ProductTag.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'products',
                key: 'id'
            }
        },
        tag_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tags',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        modelName: 'ProductTag',
        timestamps: false
    }
);

module.exports = ProductTag;
