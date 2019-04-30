const dev = process.env.NODE_ENV !== 'production';
const fs = require('fs');
const appRoot = require('app-root-path');

const config = JSON.parse(fs.readFileSync(`${dev ? appRoot + '/server' : '/conf'}/dtac-sme-client-config.json`));

module.exports = config;
