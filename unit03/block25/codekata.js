function nextBigger(n){
//   convert number to string and create an array of characters
  const digits = n.toString().split("").map(Number);
  let i = digits.length - 2;
//   Find first digit from the right smaller than the next digit on the left
  while ( i >= 0 && digits[i] >= digits[i+1]){i--};
  if (i < 0) return -1;

  //   finds smallest digit on right side of i that is bigger than digits[i]
  let j = digits.length - 1;
  while (digits[j] <= digits[i]) {
    j--;
  }
//  swap numbers
[digits[i], digits[j]] = [digits[j], digits[i]];

//  reverse the part after i
const left = digits.slice(0, i+1);
const right = digits.slice(i+1).reverse();
result = left.concat(right).join("");

return result;
}
console.log(nextBigger(6831));
