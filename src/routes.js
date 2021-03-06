/**
 * @Author: sandeep.patel
 * @Date: 01-Jul-19, Mon
 **/
module.exports = (app, CONFIG, databaseInstance) => {

    let router = require('express').Router();
    const { HomeController } = require('./controllers')(CONFIG, databaseInstance);

    router.get('/', HomeController.home);
    router.get('/status', HomeController.index);
    router.post('/test', HomeController.test);
    router.get('/products', HomeController.products);
    router.post('/products', HomeController.createProducts);
    router.get('/sync-db', HomeController.syncDb);

    return router;
};