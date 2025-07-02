# Number Guesser

Let's build a simple number guessing game! The user will think of a number, and the
computer will try to guess that number in as few attempts as possible.

A [live demo of the finished project](https://fsa-number-guesser.netlify.app/) is
available for you to reference.

## Manage game state in context

The main logic for the number guessing game will live in `GameContext.jsx`, which is
already written for you.

1. `phase` represents which phase of the game the user is currently in. What are its three
   possible values?
2. What value is currently being provided through this context? You will come back to
   change this later!
3. Explain in technical detail the purpose of the `useEffect`.
4. What does `process` do?
5. Explain the strategy that the computer will use to guess the player's number.

Move on when you have a solid idea of what is being managed in `GameContext`.

## Start the game

A **form action** is a function that is run when a form is submitted. React will
automatically pass `formData` into that function so that you can access the data submitted
by the form. An example of this code is in `GameStart.jsx`, which is already written for
you.

6. What does `startGame` take as a parameter?
7. What is being assigned to the newly created `max` variable?
8. Where is the `start` function coming from?
9. In your own words, what happens when the user types a number and clicks the "Start"
   button?
10. Fix `<GameProvider>` so that it correctly provides the context that `<GameStart>`
    needs.

Move on when you can start the game successfully. Use React DevTools to ensure that the
game is correctly using the player's max number from the form.

## Play the game

The main game loop happens in the `<Game>` component.

11. What is the `name` of the `<select>` field in the form?
12. What are three possible values of the `<select>` field?
13. Write a form action to update the computer's guess depending on the user's response in
    the form. Use the `process` function from `GameContext`!

Move on when you can play the game. The computer should guess a new number every time you
submit the form. If the computer guesses correctly, it should take you to the ending
screen.

## Restart the game

Let the player know how the computer did!

14. In `<GameEnd>`, tell the player the final guess as well as the number of tries it took
    the computer to guess the player's number.
15. Add a form action so that the game will `restart` when the user clicks the button to
    submit the form.

Congrats! You should now have a fully functional number guessing game! You've reviewed how
to use context to manage state and the functions to change that state. You've also now learned
how to handle user interaction with form actions.
