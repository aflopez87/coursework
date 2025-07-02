//https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118

// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

// save array to a const
// compare the first name to the second number (compare a to b)

const example =[1,2,1,1,1,4,4,3,1,2,2,3,3] //-->> [1,2,3]

const findDuplicate = (arrOfNums)=>{
    // choose to return a new array create it here, you also have the option to try and manipulate the array directly
    const newArray = [];
    for (let i=0; i<example.length; i++){
        const currentNum = arrOfNums[i];
        if(!newArray.includes(currentNum)){
            newArray.push(currentNum)
        }
    }
    return newArray;
}

console.log(findDuplicate(example));