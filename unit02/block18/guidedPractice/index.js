const body = document.querySelector("body")
const div = document.querySelector("#singleArtist")
const ul = document.querySelector("ul")

const baseUrl = 'https://fsa-crud-2aa9294fe819.herokuapp.com/api/2503-ftb-et-web-pt'
const artists = []
let displayedArtist

//get all
const getArtists = async ()=>{
    try{
        //fetch from the API with base Url+ resource
        const response = await fetch(baseUrl+'/artists')
        //turn the data from the API in th js we can use
        const data = await response.json()
        // the resulting js from the previous step is an object with a success message, error message, and data...we only want the data
        const fetchedArtists = data.data
        //we use forEach or a for loop to push each artist into state. 
        fetchedArtists.forEach((artist)=>{artists.push(artist)})
        console.log(artists)
        //rerender the page to visually reflect the changed artist data.
        render()
    }catch(err){
        console.log(err.message)
    }
}
//get One
const getArtist = async (artistId)=>{
    try{
        //fetsch from the API with base Url+ resource + id
        const response = await fetch(baseUrl+'/artists/'+artistId)
        //turn the data from the API in th js we can use
        const data = await response.json()
        // the resulting js from the previous step is an object with a success message, error message, and data...we only want the data
        const fetchedArtist = data.data
        //we use forEach or a for loop to push each artist into state. 
        displayedArtist = fetchedArtist
        //rerender the page to visually reflect the changed artist data.
        render()
    }catch(err){
        console.log(err.message)
    }
}

//redenerOne
const renderSingleArtist = ()=>{
    const artistSection = document.createElement("section")
        artistSection.innerHTML = `
        <p class ="exit">X</p>
        <h3>${displayedArtist.name} #${displayedArtist.id}</h3>
        <figure>
            <img alt="${displayedArtist.name}" src="${displayedArtist.imageUrl}" />
        </figure>
        <p>${displayedArtist.description}</p>
        `
        div.replaceChildren(artistSection)
}


//Render all
const renderAllArtist=()=>{
    const artistsElements = artists.map((artist)=>{
        const artistLi = document.createElement("li")
        artistLi.innerHTML = `
            <a>${artist.name}</a>
        `
        artistLi.addEventListener("click",(e)=>{
            e.preventDefault()
            getArtist(artist.id)
        })
        return artistLi
    })

    ul.replaceChildren(...artistsElements)
}


const render = ()=>{
    renderAllArtist()
    displayedArtist && renderSingleArtist()
}

const init = ()=>{
    getArtists()
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