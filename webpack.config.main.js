const path = require("path");
const WebpackShellPluginNext = require("webpack-shell-plugin-next");

module.exports = (_mode) =>({
    mode: _mode,
    entry: "./src/main/main.ts",
    target: "electron-main",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "main.js"
    },
    node: {__dirname: false},
    plugins: [
        new WebpackShellPluginNext({
            onBuildStart: {
                scripts: ['echo "Webpack Start"'],
                blocking: true,
                parallel: false
            },
            onBuildEnd: {
                scripts: ['yarn electron:start'],
                blocking: false,
                parallel: true
            }
        })
    ],
    module: {

    }
})