import { useEffect, useState} from 'react'
import axios from 'axios'
import Recipe from './Recipe'

function Menu() {
    const [menu, setMenu] = useState([])
    useEffect(()=>{
        const getMenu = async()=>{
            const response = await axios.get('https://fsa-crud-2aa9294fe819.herokuapp.com/api/COHORT_CODE/recipes')
            setMenu(response.data.data)

        }
        getMenu()
    })
    return(
        menu.map(menuItem=><Recipe key={menuItem.id} name={menuItem.name} imageUrl={menuItem.imageUrl} description={menuItem.description} id={menuItem.id}/>)
    )
}

export default Menu