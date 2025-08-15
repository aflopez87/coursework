import db from "#db/client";

export async function createRestaurant(name, location) {
  const sql = `
  INSERT INTO restaurants
    (name, location)
  VALUES
    ($1, $2)
  RETURNING *
  `;
  const {
    rows: [restaurant],
  } = await db.query(sql, [name, location]);
  return restaurant;
}

export async function getRestaurants() {
  const sql = `
  SELECT *
  FROM restaurants
  `;
  const { rows: restaurants } = await db.query(sql);
  return restaurants;
}

export async function getRestaurantById(id) {
  const sql = `
  SELECT *
  FROM restaurants
  WHERE id = $1
  `;
  const {
    rows: [restaurant],
  } = await db.query(sql, [id]);
  return restaurant;
}
