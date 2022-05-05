const db = require('../db')
const { DataTypes, Model } = require('sequelize')


class Order extends Model {}

Order.init({
    numItems: DataTypes.INTEGER,
    totalPrice: DataTypes.INTEGER
}, {
    sequelize: db,
    timestamps: false,
});

module.exports = Order;