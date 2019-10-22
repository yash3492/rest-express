/**
 * @Author: sandeep.patel
 * @Date: 01-Jul-19, Mon
 **/
module.exports = (CONFIG, databaseInstance) => {
    return {
        HomeController: require('./home.controller')(CONFIG, databaseInstance),
    };
};