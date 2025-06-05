const path = require('path');

module.exports = {
    webpack: {
        alias: {
        '@store': path.resolve(__dirname, 'src/store'),
        '@types': path.resolve(__dirname, 'src/types'),
        '@utils': path.resolve(__dirname, 'src/utils'),
        '@services': path.resolve(__dirname, 'src/services'),
        '@data': path.resolve(__dirname, 'src/data'),
        '@assents': path.resolve(__dirname, 'src/assents'),
        '@components': path.resolve(__dirname, 'src/components'),
        },
    },
};