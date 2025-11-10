function printerError(s){
    const errors = (s.match(/[^a-m]/g) || []).length;
    return `${errors}/${s.length}`;
}

// Alternative with no regex
function printError2(s){
    // fast, no regex: check char codes for 'a'..'m'
    let errors = 0;
    for (let i=0; i<s.length; i++){
        const c = s.charCodeAt(i);
        if (c < 97 || c > 109) errors++;
    }
    return `${errors}/${s.length}`;
}

// Alternate with functional split + filter
function printError3(s){
    const errors = s.split('').filter(ch => ch < 'a' || ch > 'm').length;
    return `${errors}/${s.length}`;
}

// one liner using reduce
function printError4(s){
    //acc is reducer accumulator
    const errors = [...s].reduce((acc,ch) => acc + (ch < 'a' || ch > 'm'), 0);
    return `${errors}/${s.length}`;
}

/*
Example
first iterations for s = "abx"
acc = 0
ch = 'a' -> acc = 0 + 0 = 0
ch = 'b' -> acc = 0 + 0 = 0
ch = 'x' -> acc = 0 + 1 = 1
```// first iterations for s = "abx"
acc = 0
ch = 'a' -> acc = 0 + 0 = 0
ch = 'b' -> acc = 0 + 0 = 0
ch = 'x' -> acc = 0 + 1 = 1
*/ 