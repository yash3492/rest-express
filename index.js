/**
 * @Author: sandeep.patel
 * @Date: 01-Jul-19, Mon
 **/

// Load environment variables
let result = require('dotenv').config();
if (result.error) {
    throw result.error;
}

const config = process.env || {};
// Initialize server
const server = require('./src')(config);

// Here if needed core server can be extended.
// Can bind to any vhost etc.
// Start server
server.listen(config.PORT || 4000, () => {
    console.log('Server in \'%s\' mode, %s is Ready', config.NODE_ENV, ('localhost:' + config.PORT));
});
