const path = require("path");
module.exports = (_mode => ({
    mode: _mode,
    entry: "./src/main/preload.ts",
    target: "electron-preload",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "preload.js"
    },
    resolve: {
        extensions: ['.js', '.ts', '.json'],
        modules: ['src/main', 'node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)$/,    //kind of file extension this rule should look for and apply in test
                exclude: /node_modules/, //folder to be excluded
                use: 'babel-loader' //loader which we are going to use
            }
        ]
    },
}))