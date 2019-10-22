const { version } = require('../package.json');

const output = () => console.log(`v${version}`);

module.exports = output;
