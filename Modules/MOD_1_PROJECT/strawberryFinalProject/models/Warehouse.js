const db = require('../db')
const { DataTypes, Model } = require('sequelize')


class Warehouse extends Model {}

Warehouse.init({
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    size: DataTypes.INTEGER,
    image: DataTypes.STRING
}, {
    sequelize: db,
    timestamps: false
});

module.exports = Warehouse;