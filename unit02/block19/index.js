const body = document.querySelector("body");
const apiUrl = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2503-ftb-et-web-pt/artists'
const stateArtist = [];
// a function that gets our data
const retrieveArtist = async ()=>{
    // READ/GET
    const response = await fetch(apiUrl);
    const data = await response.json();
    const artists = data.data;
    artists.forEach(artist=>{stateArtist.push(artist)});
    console.log(stateArtist)
}

async function addArtist(){
    // CREATE/POST
    const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(artist)
    });
    const data = await response.json();
    const apiArtist = data.data;
    renderArtists()
    console.log(stateArtist)
}

// a function to show one artist at a time
const displayArtist = (artist)=>{
    // create Element
    const artistHolder = document.createElement("div");
    // give it content 
    artistHolder.innerHTML = `
    <h3>${artist.name}</h3>
    <img src="${artist.imageUrl} alt="this is a picture of ${artist.name}"/>
    <p id = deleteButton>x</p>
    `
    const deleteButton = artistHolder.querySelector("#deleteButton")
    deleteButton.addEventListener("click", ()=>{
        // delete function
    }) 

    return artistHolder
}
// a function to show all the artist

const renderArtists = ()=>{
    // mapp over state and create HTML for each artist
    const artistHolders = stateArtist.map((artist)=>{return displayArtist(artist)});
    // createa container for easy management later
    const artistContainer = document.createElement("div");
    // append the HTML elements we just created to the container we just created
    artistContainer.append(...artistHolders)
    // append that container in the page
    body.append(artistContainer)
}

// a function to add an artist -- this will need a form
const addArtistForm = ()=>{
    const form = document.createElement("form");
    form.innerHTML = `
        <label for="name">What's the artist name?</label>
        <input name ="name"/>
        <label for="img">Do you have a picture?</label>
        <input name ="img"/>
        <label for="description">Tell us about the artist!</label>
        <input name ="description"/>
        <input type="submit" value="Enter new Artist"/>

    `
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        const newArtist = {
            name:e.target.name.value,
            imageUrl:e.target.img.value,
            description:e.target.description.value,
        }
    
})
body.prepend(form)
}
// a function to delete an artist
async function deleteArtist(){
    // CREATE/POST
    const response = await fetch(apiUrl+"/"+ artist.id, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(artist)
    });
    const data = await response.json();
    const apiArtist = data.data;
    renderArtists()
    console.log(stateArtist)
}

// a function that updates the UI

// an initiation function that calls all the necessaryu functions to render the page
async function init(){
    await retrieveArtist()
    addArtistForm()
    renderArtists()
}
init()