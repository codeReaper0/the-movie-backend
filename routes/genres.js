const express = require("express");
const router = express.Router();

const genres = [
  {id: 1, name: "Action"},
  {id: 2, name: "Horror"},
  {id: 3, name: "Romance"},
  {id: 4, name: "Science Fiction"},
  {id: 5, name: "Fantasy"},
  {id: 6, name: "Comedy"},
  {id: 7, name: "Drama"},
  {id: 8, name: "Mystery"},
  {id: 9, name: "Adventure"},
  {id: 10, name: "Thriller"},
  {id: 11, name: "Crime"},
  {id: 12, name: "Historical"},
  {id: 13, name: "Animation"},
  {id: 14, name: "Documentary"},
  {id: 15, name: "Musical"},
  {id: 16, name: "Family"},
  {id: 17, name: "Biography"},
  {id: 18, name: "War"},
  {id: 19, name: "Western"},
  {id: 20, name: "Sports"},
];

router.get("/", (req, res) => {
  res.send(genres);
});

router.post("/", (req, res) => {
  const {error} = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const genre = {
    id: genres.length + 1,
    name: req.body.name,
  };
  genres.push(genre);
  res.send(genre);
});

router.put("/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");

  const {error} = validateGenre(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  genre.name = req.body.name;
  res.send(genre);
});

router.delete("/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");

  const index = genres.indexOf(genre);
  genres.splice(index, 1);

  res.send(genre);
});

router.get("/:id", (req, res) => {
  const genre = genres.find((c) => c.id === parseInt(req.params.id));
  if (!genre)
    return res.status(404).send("The genre with the given ID was not found.");
  res.send(genre);
});

function validateGenre(genre) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(genre);
}

module.exports = router;
