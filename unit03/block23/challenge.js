
const sampleString = "sample";
const sampleArr = ["hi", "may", "candy"];

const foundString = (str, arr)=>{
    let boolean = false;
    for (i=0; i<arr.length; i++){
        const eachString = arr[i];
        if (eachString === str){
            boolean = true;
            break
        }
    };
    return boolean;
};

console.log(foundString(sampleString, sampleArr))