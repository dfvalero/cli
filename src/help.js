const help =
`Usage: cli <command>

Commands:
  -h, --help        Output usage information
  -v, --version     Output the version number
  
  generate-player   Generates a random player
`;

const output = () => console.log(help);

module.exports = output;
