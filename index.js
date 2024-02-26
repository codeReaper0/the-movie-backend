const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const winston = require("winston");
const swaggerDocument = require("./swagger");
const cors = require("cors");

require("./startup/logging")();
require("./startup/routes")(app);
require("./startup/db")();
require("./startup/validation")();
require("./startup/config")();
require("./startup/prod")(app);

// Use cors middleware
app.use(cors({origin: "*"}));

// Swagger API Documentation
const specs = swaggerJsdoc(swaggerDocument);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
  winston.info(`Server running on port ${port}...`);
});

module.exports = server;
