# Dinner Party

You and your friends go out to eat for dinner at the new JavaScript Pub. You talk, laugh, and reminisce about the old days. Unfortunately, when you get the check, it is smeared with sauces, making it unreadable. Instead of asking for a reprint, you decide to problem-solve and discover the total for yourself.

## Instructions

1. Clone this repository down to your local machine and open it with VS Code. This will not be submitted.
2. Designate one person in your group to be the initial Driver. Everyone else will be a Navigator.
3. As a team, read each question out loud and reach a consensus on the answer before moving to the next question.

## Represent dinner as an object

You ask your friends what they ate, and you receive the following information:

- You ate a cheeseburger for $12.
- Jonah had the $20 steak.
- Amy's soup cost $8.
- Mateo did not like his $14 mac and cheese.
- Cheyenne was impressed by the $16 unlimited soup and salad combo.

Write code in `index.js` according to the following prompts.

1. Declare an object named `dinner` where each key is the name of the purchased food, and the value is the corresponding price.

> [!NOTE]
>
> How do you declare keys with multiple words? While it's possible to use a string with spaces as a key, camelCase is generally preferred since it allows for dot notation.\
> e.g. `foo.multiWordKey` over `foo["multi word key"]`

2. Print the names of each food in `dinner` twice: once using a loop, and then with `Object.keys`.
3. Print the prices of each food in `dinner` twice: once using a loop, and then with `Object.values`.

When you are ready to continue, designate a new person to be the Driver.

## Calculate the total cost of dinner

4. Use a `for..in` loop to calculate the total cost of the meal represented by the `dinner` object.
5. Use `Object.values` to calculate the total cost of the meal represented by the `dinner` object.
6. Convert one of your previous answers into a function that takes an object with number values as input. The function should output the sum of all those values.
