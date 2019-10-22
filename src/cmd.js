const ACTIONS = {
    VERSION: 'version',
    HELP: 'help',
    GENERATE_PLAYER: 'generate-player'
};

const VALID_FLAGS = {
    VERSION: ['-v', '--version'],
    HELP: ['-h', '--help']
};

const getAction = command => {
    if (!command) {
        return ACTIONS.HELP;
    }

    if (VALID_FLAGS.VERSION.includes(command)) {
        return ACTIONS.VERSION;
    }

    if (VALID_FLAGS.HELP.includes(command)) {
        return ACTIONS.HELP;
    }

    return command;
};

const cmd = () => {
    const [command]  = process.argv.slice(2);
    const action = getAction(command);

    switch (action) {
        case ACTIONS.HELP:
            require('./help')();
            break;
        case ACTIONS.VERSION:
            require('./version')();
            break;
        case ACTIONS.GENERATE_PLAYER:
            require('./generate-player')();
            break;
        default:
            require('./help')();
            require('./unknown-command')(command);
            break;
    }

    return cmd;
};

module.exports = cmd;