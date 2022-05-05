const db = require('../db')
const Category = require('./Category');
const Warehouse = require('./Warehouse');
const Item = require('./Item');
const Order = require('./Order');
const User = require('./User');

async function index() {

    //creating Association between models
    Category.belongsTo(Warehouse);
    Warehouse.hasMany(Category);
    Item.belongsTo(Category);
    Category.hasMany(Item);
    Item.belongsTo(Order);
    Order.hasMany(Item);
    Order.belongsTo(User);
    User.hasMany(Order);

}

module.exports = index;