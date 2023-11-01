const express = require("express");
const mongoose = require("mongoose");
const app = express();
const courses = require("./routes/courses");
const home = require("./routes/home");
const genres = require("./routes/genres");

mongoose
  .connect("mongodb://localhost/playground")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: {type: Date, default: Date.now},
  isPublished: Boolean,
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Node Js",
    author: "Tella",
    tags: ["node", "backend"],
    isPublished: true,
  });
  const result = await course.save();
  console.log(result);
}

async function getCourse() {
  const result = await Course.find({author: "Tella"});
  console.log(result);
}

getCourse();

app.use(express.json());
app.use("/api/courses", courses);
app.use("/", home);
app.use("/api/genres", genres);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
