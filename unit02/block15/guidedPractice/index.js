/**
 * @typedef Quote
 * @property {string} sentence
 * @property {string} author
 */

// === Constants ===
const NUM_QUOTES = 20;
const SENTENCES = [
  "The journey of a thousand miles begins with one step.",
  "Every sunrise brings with it a new chance to be the person you were meant to be.",
  "Rise above the clouds, and you'll see that the sky is not the limit, but the beginning.",
  "Success is not a destination; it's a well-planned detour.",
  "Don't chase dreams; walk beside them and let them guide you.",
];
const AUTHORS = [
  "Isabel Chang",
  "Clara Wyndham",
  "Agnes Woods",
  "Jasper Brown",
  "Samuel Kumar",
];

// === State ===
/** @returns {Quote} a quote with a random sentence and random author */
function makeQuote() {
  // TODO
}

// <______________________________In class code
const makeQuote=()=>{
    const quote={}
    // get a randomNum for the authorArray
    const randomAuthNum = Math.floor(Math.random()*AUTHORS.length-1);
    const randomAuthor = AUTHORS[randomAuthNum];
    quote.author = randomAuthor;
    const randomSentNum = Math.floor(Math.random()*SENTENCES.length-1);
    const randomSentence = SENTENCES[randomSentNum];
    quote.sentence = randomSentence;
    return quote
}

function makeQuotes(){
    const quoteArr = []
    for(let i=0; i<20;i++){
    const newQUote = makeQUote()
    quoteArr.push(newQuote)    
    }
returnQuoteArr
}
const quoteState = makeQuotes()
console.log(quoteState)

// create a single quote
const createQuote = (quote)=>{
    // create elements
    const figure = document.createElement("figure")
    const blockQuote = document.createElement("blockQuote")
    const figCaption = document.createElement("figCaption")
    // add text/style
    figure.className = "quote"
    figure.style.border = "1px solid"
    figure.style.margin = "5px"
    blockQuote.textContent = quote.sentence
    figCaption.textContent = quote.author
    // add children to parent
    figure.appendChild(blockQuote)
    figure.appendChild(figCaption)
    return figure
}

function createQuotes (){
    const quoteArr = quoteState.map((quote)=>{return createQuote(quote)})
    quoteArr.forEach((quoteObject)=>{
        quoteCOntainer.appendChild(quoteObject)
    })

}
function init(){
    createQuotes()
}
const heading = document.createElement("h1")
heading.textContent = "theseare the Quotes"

init()

console.log(createQuote(quoteState[0]))



// <______________________________In class code
const quotes = undefined; // TODO

// === Components ===
/**
 * A single card with a quote and its author
 * @param {Quote} quote
 */
function QuoteCard(quote) {
  // TODO
}

/** An article of many QuoteCards */
function QuoteCards() {
  // TODO
}

// === Render ===
function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
    <h1>Inspirational Quotes</h1>
    <QuoteCards></QuoteCards>
  `;
  $app.querySelector("QuoteCards").replaceWith(QuoteCards(quotes));
}
render();