import express from "express";
const router = express.Router();
export default router;

import { getReservationsByRestaurantIdAndUserId } from "#db/queries/reservations";
import { getRestaurantById, getRestaurants } from "#db/queries/restaurants";
import requireBody from "#middleware/requireBody";
import requireUser from "#middleware/requireUser";

router.route("/").get(async (req, res) => {
  const restaurants = await getRestaurants();
  res.send(restaurants);
});

router.param("id", async (req, res, next, id) => {
  const restaurant = await getRestaurantById(id);
  if (!restaurant) return res.status(404).send("Restaurant not found.");
  req.restaurant = restaurant;
  next();
});

router.route("/:id").get(async (req, res) => {
  const restaurant = req.restaurant;

  if (req.user) {
    const reservations = await getReservationsByRestaurantIdAndUserId(
      restaurant.id,
      req.user.id,
    );
    restaurant.reservations = reservations;
  }

  res.send(restaurant);
});

router
  .route("/:id/reservations")
  .post(requireUser, requireBody(["partySize", "date"]), async (req, res) => {
    const { partySize, date } = req.body;
    const reservation = await createReservation(
      req.restaurant.id,
      req.user.id,
      partySize,
      date,
    );
    res.status(201).send(reservation);
  });
