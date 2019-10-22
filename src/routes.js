/**
 * @Author: sandeep.patel
 * @Date: 01-Jul-19, Mon
 **/
module.exports = (app, CONFIG) => {

    let router = require('express').Router();
    const { HomeController } = require('./controllers')(CONFIG);

    router.get('/', HomeController.index);
    router.post('/test', HomeController.test);

    return router;
};