import db from "#db/client";

export async function createReservation(restaurantId, userId, partySize, date) {
  const sql = `
  INSERT INTO reservations
    (user_id, restaurant_id, party_size, date)
  VALUES
    ($1, $2, $3, $4)
  RETURNING *
  `;
  const {
    rows: [reservation],
  } = await db.query(sql, [userId, restaurantId, partySize, date]);
  return reservation;
}

export async function getReservationsByUserId(id) {
  const sql = `
  SELECT *
  FROM reservations
  WHERE user_id = $1
  `;
  const { rows: reservations } = await db.query(sql, [id]);
  return reservations;
}

export async function getReservationsByRestaurantIdAndUserId(
  restaurantId,
  userId,
) {
  const sql = `
  SELECT *
  FROM reservations
  WHERE
    restaurant_id = $1
    AND user_id = $2
  `;
  const { rows: reservations } = await db.query(sql, [restaurantId, userId]);
  return reservations;
}

export async function getReservationById(id) {
  const sql = `
  SELECT *
  FROM reservations
  WHERE id = $1
  `;
  const {
    rows: [reservation],
  } = await db.query(sql, [id]);
  return reservation;
}
