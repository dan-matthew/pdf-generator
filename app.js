// Register Babel to transpile before our code runs
require("@babel/register")({
  presets: ["@babel/preset-env", "@babel/preset-react"],
});

// Import the rest of our application
module.exports = require("./app.babel.js");
