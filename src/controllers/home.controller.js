/**
 * @Author: sandeep.patel
 * @Date: 01-Jul-19, Mon
 **/

module.exports = (CONFIG, { ProductModel }) => {

    return {

        // Status check route
        index: (req, res, next) => {
            res.send({
                success: true,
                now: (Date.now()),
            });
        },

        // Notice we have used `async` function here
        test: async (req, res) => {
            let data = await new Promise((resolve) => {
                console.log('Promise started');
                setTimeout(() => {
                    console.log('Promise done');
                    resolve('set timeout done');
                }, 2000);
            });
            console.log('Log after await');
            res.send({
                valid: true,
                data,
                num1: req.body.num1,
                num2: req.body.num2,
            });
        },

        home: async (req, res) => {
            let products = await ProductModel.findAll({
                order: [['id', 'ASC']]
            });
            console.log('Total products in DB', products.length);
            res.render('home', { products });
        },

        products: async (req, res) => {
            let products = await ProductModel.findAll({
                order: [['id', 'ASC']]
            });
            res.send({
                success: true,
                products
            });
        },

        createProducts: async (req, res) => {
            let productRequest = {
                name: req.body.name,
                description: req.body.description,
            };
            let product = await ProductModel.create(productRequest);
            console.log('created product', product.id);
            return res.redirect('/');

        },

        syncDb: async (req, res) => {
            let d = await ProductModel.sync({alter: true});
            res.send({
                success: true,
                d
            });
        }
    };
};