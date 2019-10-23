/**
 * @Author: sandeep.patel
 * @Date: 21-Oct-19, Mon
 **/

const Sequelize = require('sequelize');

module.exports = sequelize => {
    return sequelize.define(
      'product',
      {
          id: {
              type: Sequelize.INTEGER,
              primaryKey: true,
              autoIncrement: true,
              //type: Sequelize.UUID,
              //defaultValue: Sequelize.UUIDV4
          },
          isActive: {
              type: Sequelize.BOOLEAN,
              defaultValue: true,
          },
          name: {
              type: Sequelize.STRING,
          },
          description: {
              type: Sequelize.STRING,
          },
      },
      {
          schema:'abc',
          tableName: `product`,
          paranoid: false,
          timestamps: true,
      }
    );
};
