/**
 * @Author: sandeep.patel
 * @Date: 01-Jul-19, Mon
 **/
module.exports = (CONFIG) => {
    return {
        HomeController: require('./home.controller')(CONFIG),
    };
};