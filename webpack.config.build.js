var path = require("path");
const base = require('./webpack.config.base')

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "index.js",
        libraryTarget: "commonjs2"
    },
    module: {
        rules: [
            ...base.module.rules,
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"],
            },
        ]
    },
    externals: {
        react: "commonjs react"
    }
};

