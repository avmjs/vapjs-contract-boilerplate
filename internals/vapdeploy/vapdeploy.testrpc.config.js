const vapdeployBase = require('./vapdeploy.base.config.js');
const HTTPProvider = require('vapjs-provider-http');

module.exports = vapdeployBase({
  name: 'testrpc',
  provider: new HTTPProvider('http://localhost:8545'),
  defaultTxObject: {
    from: 0,
    gas: 4000000,
  },
});
