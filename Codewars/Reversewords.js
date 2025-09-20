// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
function reverseWords(str){
    const sentence = str.split(' ') // Split the string into words
    .map(word => word.split('').reverse().join('')) // Split each word into array of letters and reverse the order before rejoining the word
    .join(' '); // Join the words back into a string
    return sentence;
};