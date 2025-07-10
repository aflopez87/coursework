//https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript
//write a function that returns the middle charachter(s) in a word

const example = "hello" // l
const example2 = "lemons" // mo

const findMiddle = (string)=>{
    const length = string.length
    const middleIndex = length/2
    if (length%2===0){
        return string[middleIndex -1] + string[middleIndex]
    }else{
        return string[Math.floor(middleIndex)]
    }
    }
console.log(findMiddle(example))
console.log(findMiddle(example2))