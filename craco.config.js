const path = require('path');

module.exports = {
    webpack: {
        alias: {
        '@store': path.resolve(__dirname, 'src/store'),
        },
    },
};