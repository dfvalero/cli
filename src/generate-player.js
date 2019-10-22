const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const generatePlayer = () => {
    const velocity = random(50, 99);
    const jump = random(50, 99);
    const rebound = random(50, 99);
    const defense = random(50, 99);
    const energy = random(50, 99);
    const attributes = [velocity, jump, rebound, defense];
    const average = Math.floor(attributes.reduce((total, current) => total + current) / attributes.length);

    console.log({
        velocity,
        jump,
        rebound,
        defense,
        energy,
        average,
    });
};

module.exports = generatePlayer;