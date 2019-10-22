/**
 * @Author: sandeep.patel
 * @Date: 21-Oct-19, Mon
 **/

const Sequelize = require('sequelize');

module.exports = envConfig => {
    const sequelize = new Sequelize(envConfig.DB_URI, {
        dialect: envConfig.DB_URI || 'postgres',
        logging: false,
        // logging: console.log,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
        // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
        //operatorsAliases: false,
    });

    sequelize.authenticate().then(() => {
        console.log('info', '[rest-express]', 'async: DB Connection has been established successfully.');
    })
    // By not catching it here, will generate `Unhandled rejection`
      .catch(err => {
          console.error('error', '[rest-express]', 'Error in connecting to the Model database', err);
          //throw err;
      });

    return sequelize;
};