import { faker } from "@faker-js/faker";

import db from "#db/client";
import { createReservation } from "#db/queries/reservations";
import { createRestaurant } from "#db/queries/restaurants";
import { createUser } from "#db/queries/users";

await db.connect();
await seed();
await db.end();
console.log("🌱 Database seeded.");

async function seed() {
  // Create 10 restaurants
  for (let i = 0; i < 10; i++) {
    await createRestaurant(
      faker.company.name(),
      faker.location.streetAddress(),
    );
  }

  // Create 2 test users with 5 reservations each
  const user1 = await createUser("heartseeker@lo.ve", "cupid123");
  for (let i = 1; i <= 5; i++) {
    await createReservation(i, user1.id, 1, "1111-11-11");
  }

  const user2 = await createUser("druid@forest.tree", "bear!");
  for (let i = 3; i <= 8; i++) {
    await createReservation(i, user2.id, 2, "2222-02-20");
  }
}
