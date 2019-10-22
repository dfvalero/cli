const chalk = require('chalk');

const text = command =>
`  ${chalk.red('Unknown option')} ${chalk.yellow(command)}
`;
const output = command => console.log(text(command));

module.exports = output;
