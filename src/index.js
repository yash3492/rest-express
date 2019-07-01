/**
 * @Author: sandeep.patel
 * @Date: 01-Jul-19, Mon
 **/
const express = require('express');
const logger = console.log;

module.exports = (CONFIG = {}) => {

    logger('info', 'Initializing server');

    //  Main App
    let app = express();

    // Initialize it
    require('./init')(app, CONFIG);

    logger('info', 'Initialized server');

    return app;
};