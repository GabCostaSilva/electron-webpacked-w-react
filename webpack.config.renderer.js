const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (_mode => ({
    mode: _mode,
    entry: "./src/renderer/index.tsx",
    target: "electron-renderer",
    devtool: 'cheap-module-source-map',
    output: {
        path: path.join(__dirname, "dist"),
        filename: "renderer.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],
    resolve: {
        /** "extensions"
         * If multiple files share the same name but have different extensions, webpack will
         * resolve the one with the extension listed first in the array and skip the rest.
         * This is what enables users to leave off the extension when importing
         */
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        modules: [__dirname, 'node_modules', 'src/renderer'],
        alias: {
            '@': path.resolve(__dirname, "src", "renderer")
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,    //kind of file extension this rule should look for and apply in test
                exclude: /node_modules/, //folder to be excluded
                use: 'babel-loader' //loader which we are going to use
            }
        ]
    },
}))