const mainConfig = require("./webpack.config.main");
const rendererConfig = require("./webpack.config.renderer");
const preloadConfig = require("./webpack.config.preload");

const mode = process.env.NODE_ENV || "development";

const config = [mainConfig(mode), rendererConfig(mode), preloadConfig(mode)];

module.exports = config;