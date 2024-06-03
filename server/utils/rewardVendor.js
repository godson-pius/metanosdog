
exports.rewardSystem = (generation, price) => {
    let reward = 0;
    switch (generation) {
        case 0:
            reward = (50 * price) / 100
            break;
        case 1:
            reward = (10 * price) / 100
            break;
        case 2:
            reward = (3 * price) / 100
            break;
        case 3:
            reward = (2 * price) / 100
            break;
        case 4:
            reward = (2 * price) / 100
            break;
        case 5:
            reward = (2 * price) / 100
            break;
        case 6:
            reward = (1 * price) / 100
            break;
    }

    return reward;
}