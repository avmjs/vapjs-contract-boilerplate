const vapdeployBase = require('./vapdeploy.base.config.js');
const SignerProvider = require('vapjs-provider-signer'); // eslint-disable-line
const sign = require('vapjs-signer').sign; // eslint-disable-line
const accounts = require('../accounts');

module.exports = vapdeployBase({
  name: 'rinkeby',
  provider: new SignerProvider('https://rinkeby.infura.io', {
    signTransaction: (rawTx, cb) => {
      cb(null, sign(rawTx, accounts[0].secretKey));
    },
    accounts: cb => cb(null, [accounts[0].address]),
  }),
  defaultTxObject: {
    from: 0,
    gas: 4000000,
  },
});
