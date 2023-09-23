import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


function Pokemon(){
    let [pokeData,setPokeData] = useState()

    const fetchPokemon =  async() =>{
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon`)
    const data = await response.json()
    console.log(data)
    setPokeData(data.results)
    }
    useEffect(() =>{
        fetchPokemon()
    },[])
    let params = useParams()
    let {id} = params   
    return(
        <>
        <h1>Pokemon</h1>
        {
            pokeData &&
            pokeData.map((pokemon) => <img key = {pokemon.name}></img>)
        }
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}></img>
        </>
    )


}

export default Pokemon