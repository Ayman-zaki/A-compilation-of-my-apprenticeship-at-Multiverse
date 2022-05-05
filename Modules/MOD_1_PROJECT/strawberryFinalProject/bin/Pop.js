const db = require('../db');
const fs = require('fs/promises');
const path = require('path');
const index = require('../models/index');
const Warehouse = require('../models/Warehouse');
const Category = require('../models/Category');
const Item = require('../models/Item');

const popDb = async() => {
    await index();
    await db.sync({ force: true });
    const buffer = await fs.readFile(path.join(__dirname, '..', 'warehouses.json'));
    const warehouses = JSON.parse(String(buffer));
    for (const warehouseData of warehouses) {
        const warehouse = await Warehouse.create(warehouseData);
        for (const categoryData of warehouseData.categories) {
            const category = await Category.create(categoryData);
            await warehouse.addCategory(category);
            for (const itemData of categoryData.items) {
                const item = await Item.create(itemData);
                await category.addItem(item);
                console.log("popped");
            }
        }
    }

}
popDb();