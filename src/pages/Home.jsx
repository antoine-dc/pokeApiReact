import React from "react"
import { useEffect, useState } from "react"
import { CardPokemon } from "./../components/CardPokemon/CardPokemon"
import Sidebar from "./../components/Sidebar/Sidebar"
import Loader from "./../components/Loader/Loader"

function Home() {
  const [pokedex, setPokedex] = useState([])

  const [dataPokemon, setDataPokemon] = useState([])
  const [loading, setLoading] = useState(false) /* On crée un useState */

  const helloList = dataPokemon.map((poke, index) => <CardPokemon data={poke} key={index} pokedex={pokedex} setPokedex={setPokedex} />)

  useEffect(() => {
    console.log(`Le Pokédex possède ${pokedex.length} Pokémons`)
  }, [pokedex])

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/1")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setDataPokemon(data)
        setLoading(true) /* On modifie la valeur à la fin du fetch */
      })
      .catch((err) => {
        console.log(err.message)
      })
  }, [])
  return (
    <>
      <Sidebar pokedex={pokedex} />
      {loading ? <main>{helloList}</main> : <Loader />}
    </>
  )
}

export default Home
