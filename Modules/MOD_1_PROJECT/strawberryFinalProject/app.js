const express = require('express');
const Handlebars = require('handlebars');
const expressHandlebars = require('express-handlebars');
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');


const Warehouse = require('./models/Warehouse');
const Category = require('./models/Category');
const Item = require('./models/Item');
const User = require("./models/User");
const index = require('./models/index');
index();

const PORT = process.env.PORT || 3000

const app = express();

// setup our templating engine
const handlebars = expressHandlebars({
    handlebars: allowInsecurePrototypeAccess(Handlebars)
})
app.engine('handlebars', handlebars);
app.set('view engine', 'handlebars');

// serve static assets from the public/ folder
app.use(express.static('public'));

app.use(require('body-parser').urlencoded());



app.get('/select-warehouse', async(req, res) => {
    const warehouses = await Warehouse.findAll()
    res.render('warehouse-form', { warehouses });
})
app.get('/warehouses', async(req, res) => {
    const warehouses = await Warehouse.findAll()
    res.render('warehouses', { warehouses });
})

app.get('/warehouse/:id', async(req, res) => {
    const warehouse = await Warehouse.findByPk(req.params.id, {
        include: {
            model: Category
        }
    });
    res.render('warehouse', { warehouse });
})

app.get('/warehouse/:id/items', async(req, res) => {
    const warehouse = await Warehouse.findByPk(req.params.id, {
        include: {
            model: Category,
            include: Item
        }
    });
    res.render('all-items-in-warehouse', { warehouse });
})

app.get('/allitems', async(req, res) => {
    const item = await Item.findAll(({ group: 'name' }))
    res.render('items', { item });
})

app.get('/item/:id', async(req, res) => {
    const item = await Item.findByPk(req.params.id, {});
    res.render('item', { item });
})

app.get('/categories', async(req, res) => {
    const categories = await Category.findAll(({ group: 'name' }));
    res.render('categories', { categories });
})

app.get('/category/:id', async(req, res) => {
    const category = await Category.findByPk(req.params.id, {
        include: {
            model: Item
        }
    });
    res.render('category', { category });
})

app.get('/item-form', (req, res) => {
    res.render('item-form');
})

app.post('/new-item', async(req, res) => {
    const newItem = await Item.create(req.body);
    const founditem = await Item.findByPk(newItem.id);
    if (founditem) {
        res.status(201).send('NEW ITEM CREATED!!!')
    } else {
        console.log("NO item created")
    }
})



app.delete('/delete/:id', async(req, res) => {
    await Item.destroy({
        where: { id: req.params.id }
    });
    res.redirect("/");
})


app.get('/update-form/:id', async(req, res) => {

    const item = await Item.findByPk(req.params.id)
    res.render('update', { item });
})


app.post('/update/:id', async(req, res) => {
    let up = await Item.update(req.body, {
        where: { id: req.params.id }
    })
    res.redirect('/')
});

app.get('/reg-user', async(req, res) => {
    res.render("register-user");
})

app.post('/submit', async(req, res) => {
    let user = await User.create(req.body)
    res.redirect('/')
});


app.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`);
})