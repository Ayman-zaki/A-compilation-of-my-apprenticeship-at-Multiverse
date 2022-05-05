const db = require('../db')
const { DataTypes, Model } = require('sequelize')


class User extends Model {}

User.init({
    fullName: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
}, {
    sequelize: db,
    timestamps: false
});


module.exports = User;