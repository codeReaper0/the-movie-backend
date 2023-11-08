const express = require("express");
const app = express();
const winston = require("winston");

require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/validation")();
require("./startup/config")();

const port = process.env.PORT || 3000;
const server = app.listen(port, () =>
  winston.info(`Server running on port ${port}...`)
);

module.exports = server;
