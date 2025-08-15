import express from "express";
const router = express.Router();
export default router;

import {
  getReservationById,
  getReservationsByUserId,
} from "#db/queries/reservations";
import requireUser from "#middleware/requireUser";

router.use(requireUser);

router.route("/").get(async (req, res) => {
  const reservations = await getReservationsByUserId(req.user.id);
  res.send(reservations);
});

router.param("id", async (req, res, next, id) => {
  const reservation = await getReservationById(id);
  if (!reservation) return res.status(404).send("Reservation not found.");
  req.reservation = reservation;
  next();
});

router.route("/:id").get((req, res) => {
  if (req.user.id !== req.reservation.user_id) {
    return res
      .status(403)
      .send("You are not authorized to view this reservation.");
  }
  res.send(req.reservation);
});
