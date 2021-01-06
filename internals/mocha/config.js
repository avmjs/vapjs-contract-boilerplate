const HTTPProvider = require('vapjs-provider-http');
const Vap = require('vapjs');

const environments = require('../../src/contracts/lib/environments.json');
const accounts = require('../accounts');

const environmentName = 'testrpc';
const environment = environments[environmentName];
const contracts = environments.contracts;

const vap = new Vap(new HTTPProvider('http://localhost:8545'));
const defaultTxObject = {
  from: accounts[0].address,
  gas: 4500000,
};

module.exports = {
  Vap,
  vap,
  defaultTxObject,
  environment,
  contracts,
};
