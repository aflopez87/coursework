// ================== Create the elements ===================
// Create title
const oddsEvents = document.createElement("h1");
// add style/content/
oddsEvents.textContent = "Odds and Events";
// place on page
document.body.append(oddsEvents);

// create a form
const form = document.createElement("form");
// add style/content 
form.innerHTML = `
    <label>
        Add a number to the bank
        <input type="number"/>
    </label>
    <button id="add">Add number</button>
    <button id="sort1">Sort 1</button>
    <button id="sortall">Sort All</button>
    `;
// place on page
document.body.append(form);

// Create bank heading and container
const numBank = document.createElement("h2");
const bankDiv = document.createElement("div");
// Create odds heading and container
const numOdds = document.createElement("h2");
const oddsDiv = document.createElement("div");
// Create evens heading and container
const numEvens = document.createElement("h2");
const evensDiv = document.createElement("div");

// add bank style/content
numBank.textContent = "Bank";
bankDiv.style.display = "flex";
bankDiv.style.alignItems = "center";
bankDiv.style.flexWrap = "wrap";
bankDiv.style.border = "1px solid black";
bankDiv.style.borderRadius = "5px";
// add odds style/content
numOdds.textContent = "Odds";
oddsDiv.style.display = "flex";
oddsDiv.style.alignItems = "center";
oddsDiv.style.flexWrap = "wrap";
oddsDiv.style.border = "1px solid black";
oddsDiv.style.borderRadius = "5px";
// add evens style/content
numEvens.textContent = "Evens";
evensDiv.style.display = "flex";
evensDiv.style.alignItems = "center";
evensDiv.style.flexWrap = "wrap";
evensDiv.style.border = "1px solid black";
evensDiv.style.borderRadius = "5px";

// place on page
document.body.append(numBank);
document.body.append(bankDiv);
document.body.append(numOdds);
document.body.append(oddsDiv);
document.body.append(numEvens);
document.body.append(evensDiv);

// ================== Add the functions ===================

// clicking the add number button places the value in the bank
// get the input element and select the addButton
const input = form.querySelector('input[type="number"]');
const addButton = document.querySelector("#add");
// listen for button click
addButton.addEventListener("click", (e) => { 
    e.preventDefault();
    // get the value from the input
    const value = input.value; 
    // checks to make sure value is a number before pushing to array
    if (value !== "") {
        // add the value to the array
        bankArr.push(Number(value)); 
        // clear the input value for next number
        input.value = ""; 
        // show the updated bank
        renderBank();
    }
});

// create the empty array to hold the bank values
const bankArr = [];
// create a function that empties the bankDiv and populates it with ptags having the input value as text
function renderBank() {
    // clear the number bank
    bankDiv.innerHTML = "";
    // modify each number of the array
    bankArr.forEach(num => {
        // create a new ptag for each element
        const p = document.createElement("p");
        // add the new input to the new ptag
        p.textContent = num;
        p.style.padding = "5px";
        // place new ptag into the bankDiv
        bankDiv.appendChild(p);
        });
}

const sort1Button = document.querySelector("#sort1")
sort1Button.addEventListener("click", (e)=>{
    e.preventDefault()
    // prevents running if bankArr is empty
    if (bankArr.length === 0) return;
    // select the first value from the bank array
    const singleSort = bankArr[0];
    // if the first value of the bankArr divided by 2 does not produce a whole number
    if (singleSort % 2 !== 0){
        //push value to the oddsArr
        oddsArr.push(singleSort);
        renderSingleSortOdd();
    }else{
        //push value to the evensArr
        evensArr.push(singleSort);
        renderSingleSortEven();
    }

})


// sort the first number of the bank to the Odds or Evens
// create empty odds and evens arrays
const oddsArr = [];
const evensArr = [];

function renderSingleSortOdd(){
    // clear the odds div
    oddsDiv.innerHTML = "";
    bankArr.shift();
    bankDiv.removeChild(bankDiv.firstChild);
    renderBank();
    // for each number in the array, create a ptag for the oddsDiv
    oddsArr.forEach (num=>{
        // create a new ptag for each element
        const p = document.createElement("p");
        // add the new input to the new ptag
        p.textContent = num;
        p.style.padding = "5px";
        // place new ptag into the oddsDiv
        oddsDiv.appendChild(p);
    })
} 

function renderSingleSortEven(){
    // clear the odds div
    evensDiv.innerHTML = "";
    bankArr.shift();
    bankDiv.removeChild(bankDiv.firstChild);
    renderBank();
    // for each number in the array, create a ptag for the evensDiv
    evensArr.forEach (num=>{
        // create a new ptag for each element
        const p = document.createElement("p");
        // add the new input to the new ptag
        p.textContent = num;
        p.style.padding = "5px";
        // place new ptag into the evensDiv
        evensDiv.appendChild(p);
    })
} 

// sort all of the numbers in the bank to the Odds or Evens
const sortAllButton = document.querySelector("#sortall")
sortAllButton.addEventListener("click", (sortAll)=>{
    sortAll.preventDefault()
    // prevents running if bankArr is empty
    if (bankArr.length === 0) return;
    
    
    for (i=0; i<bankArr.length; i++){
    
        if (bankArr[i] % 2 !== 0){
        //push value to the oddsArr
        oddsArr.push(bankArr[i]);
    }else{
        //push value to the evensArr
        evensArr.push(bankArr[i]);
    }
    }
})