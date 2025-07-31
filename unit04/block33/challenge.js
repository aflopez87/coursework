// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.



function getCount(str) {
    let vowelArr = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowelArr.includes(str[i])) {
            count++;
        }
    }
  return count;
}

console.log(getCount("RelationAl"));
