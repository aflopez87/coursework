const body = document.querySelector("body")

const baseUrl = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2503-ftb-et-web-pt'
const artists = []
let displayedArtist 

const getArtist = async ()=>{
    try{
        //fetch from the API with base Url+ resource
        const response = await fetch(baseUrl+'/artists')
        // turn the data from the API in the js we can use
        const data = await response.json()
        // the resulting js from the previous step is an object with a success message, error message, and data... we only want the data
        const fetchedartists = data.data
        // we use forEach or a for loop to push each artist into state.
        fetchedartists.forEach((artist)=>(artists.push(artist)))
        // rerender the page to visually reflect the changed artist data.
        displayArtist = fetchedArtist
        console.log(artists)
        render()
    }catch(err){
        console.log(err.message)
    }
}

const renderSingleArtist = ()=>{
 
}

const render = () =>{
    console.log("I run!!")
    const artistsElements = artists.map((artist)=>{
        const artistLi = document.createElement("li")
        artistLi.innerHTML = `
        <a>${artist.name}</a>
        `
        return artistLi
    })
    // spread in the array
    body.replaceChildren(...artistsElements)
}

const init = async()=>{
    // render()
    getArtist()
}
init()



// const artistSection = document.createElement("section")
//         artistSection.innerHTML = `
//         <h3>${artist.name} #${artist.id}</h3>
//         <figure>
//             <img alt="${artist.name}" src="${artist.imageUrl}" />
//         </figure>
//         <p>${artist.description}</p>
//         `
//         return artistSection