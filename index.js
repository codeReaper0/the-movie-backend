const express = require("express");
const mongoose = require("mongoose");
const app = express();
const genres = require("./routes/genres");
const customers = require("./routes/customers");

mongoose
  .connect("mongodb://localhost/themovie")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.use(express.json());
app.use("/api/genres", genres);
app.use("/api/customers", customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}...`));
