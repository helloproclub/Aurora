const path = require("path");

const custom = require('../webpack.config.base')

const config = {
    ...custom,
    entry: './config.js',
    module: {
        rules: [
            ...custom.module.rules, 
            {
                test: /\.scss$/,
                loaders: ["sass-loader"],
                include: path.resolve(__dirname, '../'),
            },
        ]
    },
    externals: {}   
}

module.exports = {
    ...config,
}