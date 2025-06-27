const biggestNumber = (num) =>{
    let biggestNum = [];
    const arr = num.toString().split('');
    for (let i=arr.length-1; i>=0; i--){
        // this is the right number in the pair
        let a = arr[i];
        // this is the left number in the pair
        let b = arr[i-1];
        if (a>b){
            arr[i]=b;
            arr[i-1]=a;
            i=i+2;
        }
    }
    
    return (Number(arr.join('')))
}
console.log(biggestNumber(6948))

// [6,4,9,8] -->9864


// soliution using sort insteadd
const arr2=num.toString().split('').sort((a,b)=>b-a)