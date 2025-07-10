// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4/train/javascript

const example = "racecar"; //true
const example2 = "hello"; //false

const palindrome = (word)=>{
//     let bool = false;
//     // turn string into an array
//     const stringArr = word.split("");
//     // reverse the string
//     const backwardsArray = stringArr.reverse();
//     // turn it back into a string
//     const backwardsString = backwardsArray.join("");

//     console.log(word, stringArr)
//     // "if" statement to see if strings are equal
//     if(backwardsString === word){
//         bool = true;
//     };

//     return bool
    return word.toLowerCase() === word.toLowerCase().split("").reverse().join("");
}

console.log(palindrome(example))
console.log(palindrome(example2))