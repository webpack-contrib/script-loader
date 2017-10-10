module.exports = {
    entry: {
        index: "./entry.js",
    },
    output: {
        filename: "[name].js?[hash]",
        chunkFilename: "[name].js?[hash]-[chunkhash]",
        path: __dirname + "/dist"
    },
    module: {
        loaders: [
            { test: /exec\.js$/, loader: "script-loader" }
        ]
    },
    devtool: "source-map"
};