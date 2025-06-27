import { useState} from 'react'
import axios from 'axios'

function App() {
    const [pokemon, setPokemon] = useState([])
    useEffect(()=>{
        const getData = async ()=>{
            const response = axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
            console.log(response.data.results)
        }
        getData()
    },[]) 

    return (
    <>
    </>           
    )

}
