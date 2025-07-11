// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// ===== Combinations =====
// P1 wins
// scissors 3 > paper 2      5     1     
// paper 2 > rock 1          3     1
// rock 1 > scissors 3       4     -2

// P2 wins
// paper 2 < scissors 3      5     -1
// scissors 3 < rock 1       4     2
// rock 1 < paper 2          3     -1

// draw
// scissors = scissors       0
// paper = paper             0
// rock = rock               0

// if output is 1 or -2 player 1 wins
// if output is 0 draw
// else player 2 wins


// const rock = 1;
// const paper = 2;
// const scissors = 3;

// function selection () {
//     let player1 = prompt("Player 1, Please enter rock, paper, or scissors");
//     if (player1 !== "rock" && player1 !=="paper" && player1 !=="scissors"){
//         console.log("Please type rock, paper, or scissors")
//         return
//     }else{
//         player1 = player1==="rock"? 1: player1==="paper"? 2:3
//         let player2 = prompt ("Player 2, Please enter rock, paper, or scissors");
//         if (player2 !== "rock" && player2 !=="paper" && player2 !=="scissors"){
//         console.log("Please type rock, paper, or scissors")
//         }else{
//             player2 = player2==="rock"? 1: player2==="paper"? 2:3 
//             rockPaperScissors(player1, player2);
//         }
//     }}

function selection () {
    let player1 = Number(prompt("Player 1, Please enter 1 for rock, 2 for paper, or 3 for scissors"));
    if (player1 !== 1 && player1 !==2 && player1 !==3){
        console.log("Please type 1 for rock, 2 for paper, or 3 for scissors")
        return
    }else{
        let player2 = Number(prompt("Player 2, Please enter 1 for rock, 2 for paper, or 3 for scissors"));
        if (player2 !== 1 && player2 !==2 && player2 !==3){
        console.log("Please type 1 for rock, 2 for paper, or 3 for scissors")
        }else{
            rockPaperScissors(player1, player2);
        }
    }}    

function rockPaperScissors(input1, input2){
    const output = input1-input2;
if (output === 0){
    console.log("draw")
    return 
}
if (output === 1 || output === -2) {
    console.log("player 1 wins")
}else{
    console.log("player 2 wins")
};
}



selection();
