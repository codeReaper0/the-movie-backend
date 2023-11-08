const Joi = require("joi");
const validate = require("../middleware/validate");
const {Rental} = require("../models/rental");
const {Movie} = require("../models/movie");
const auth = require("../middleware/auth");
const moment = require("moment");
const express = require("express");
const router = express.Router();

router.post("/", auth, async (req, res) => {
  if (!req.body.customerId)
    return res.status(400).send("customerId is required");
  if (!req.body.movieId) return res.status(400).send("movieId is required");

  const rental = await Rental.findOne({
    "customer._id": req.body.customerId,
    "movie._id": req.body.movieId,
  });
  if (!rental) return res.status(404).send("Rental not found.");

  if (rental.dateReturned)
    return res.status(400).send("Return already processed.");

  rental.dateReturned = new Date();
  let rentalDaysStr = moment(rental.dateOut).fromNow();
  const regex = /\d+/g;
  const daysMatch = rentalDaysStr.match(regex);
  const rentalDays = parseInt(daysMatch[0]);
  rental.rentalFee = rentalDays * rental.movie.dailyRentalRate;

  await rental.save();

  const movie = await Movie.findOneAndUpdate(
    {_id: rental.movie._id},
    {
      $inc: {numberInStock: 1},
    }
  );
  await movie.save();

  return res.send(rental);
});

function validateReturn(req) {
  const schema = Joi.object({
    customerId: Joi.string().required(),
    movieId: Joi.string().required(),
  });

  return schema.validate(req);
}

module.exports = router;
