/**
 * @Author: sandeep.patel
 * @Date: 21-Oct-19, Mon
 **/
const Sequelize = require('sequelize');

module.exports = envConfig => {
    const sequelize = require('./connection')(envConfig);
    return {
        sequelize, // the raw connection object
        Op: Sequelize.Op,
        ProductModel: require('./product.model')(sequelize),
    };
};