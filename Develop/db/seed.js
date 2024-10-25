const sequelize = require('../config/config.json');
const { Category, Product, Tag } = require('../models');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const categories = await Category.bulkCreate([
        { category_name: 'Electronics' },
        { category_name: 'Clothing' },
        { category_name: 'Food' }
    ]);

    const products = await Product.bulkCreate([
        { product_name: 'Laptop', price: 999.99, stock: 10, category_id: 1 },
        { product_name: 'T-Shirt', price: 19.99, stock: 20, category_id: 2 },
        { product_name: 'Pizza', price: 9.99, stock: 50, category_id: 3 }
    ]);

    const tags = await Tag.bulkCreate([
        { tag_name: 'Sale' },
        { tag_name: 'New' },
        { tag_name: 'Popular' }
    ]);
};

seedDatabase().then(() => {
    console.log('Database seeded!');
    process.exit(0);
}).catch(err => {
    console.error('Error seeding database:', err);
});
