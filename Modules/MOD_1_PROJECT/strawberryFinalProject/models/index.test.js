const db = require('../db');
const Category = require('./Category');
const Warehouse = require('./Warehouse');
const Item = require('./Item');
const Order = require('./Order');
const User = require('./User');


describe('testing 101', () => {
    beforeAll(async() => {
        await db.sync({ force: true })
    });

    test('can create a item', async() => {
        const testItem = await Item.create({
            name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            price: 109.95,
            description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
        })
        expect(testItem.name).toBe('Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
        expect(testItem.price).toBe(109.95)
        expect(testItem.description).toBe("Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday")
        expect(testItem.image).toBe("https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg")
    })

    test('can create a category', async() => {
        const testCategory = await Category.create({
            name: "men's shoes",
        })

        expect(testCategory.name).toBe("men's shoes")

    })

    test('can create a User', async() => {
        const testUser = await User.create({
            fullName: "michaelAinouz",
            address: "101 center",
            phone: "6822184301",
            email: "don't call me",
            password: "hahaha"
        })
        expect(testUser.fullName).toBe("michaelAinouz")
        expect(testUser.address).toBe("101 center")
        expect(testUser.phone).toBe("6822184301")
        expect(testUser.email).toBe("don't call me")
        expect(testUser.password).toBe("hahaha")
    })

    test('can create a Order', async() => {
        const testOrder = await Order.create({
            numItems: 21,
            totalPrice: 105.03
        })

        expect(testOrder.numItems).toBe(21)
        expect(testOrder.totalPrice).toBe(105.03)

    })

    test('can create a Warehouse', async() => {
        const testWare = await Warehouse.create({
            name: "verizon",
            location: "irving 306",
            size: 30090
        })

        expect(testWare.name).toBe("verizon")
        expect(testWare.location).toBe("irving 306")
        expect(testWare.size).toBe(30090)

    })


})