const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
            {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        ],
    },
    //     modulePaths: ['/shared/vendor/modules'],
    //     moduleFileExtensions: ['js', 'jsx'],
    //     moduleDirectories: ['node_modules', 'bower_components', 'shared'],
    
    //     moduleNameMapper: {
    //     '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    //     '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
    
    //     '^react(.*)$': '<rootDir>/vendor/react-master$1',
    //     '^config$': '<rootDir>/configs/app-config.js'
    // }
};