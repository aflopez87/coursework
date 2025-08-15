DROP TABLE IF EXISTS reservations;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS restaurants;

CREATE TABLE users (
  id serial PRIMARY KEY,
  email text UNIQUE NOT NULL,
  password text NOT NULL
);

CREATE TABLE restaurants (
  id serial PRIMARY KEY,
  name text NOT NULL,
  location text NOT NULL
);

CREATE TABLE reservations (
  id serial PRIMARY KEY,
  user_id integer REFERENCES users(id) ON DELETE CASCADE,
  restaurant_id integer REFERENCES restaurants(id) ON DELETE CASCADE,
  party_size integer NOT NULL,
  date date NOT NULL
);
