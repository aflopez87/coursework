import { useEffect, useState} from 'react'
import axios from 'axios'


function Recipe(name, imageUrl, description){
    return(
        <div>
            <h3>{name}</h3>
            <img src={imageUrl} alt={name} onClick={()=>getRecipe(id)}/>
            <p>{description}</p>
        </div>
    )
}