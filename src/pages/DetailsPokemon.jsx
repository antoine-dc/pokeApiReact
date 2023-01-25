import { useEffect, useState } from "react"
import { CardPokemon } from "./../components/CardPokemon/CardPokemon"
import Sidebar from "./../components/Sidebar/Sidebar"
import Loader from "./../components/Loader/Loader"
import { useParams } from "react-router-dom"

function DetailsPokemon() {
  const [pokedex, setPokedex] = useState([])

  const [dataPokemon, setDataPokemon] = useState([])
  const [loading, setLoading] = useState(false)
  let params = useParams()

  useEffect(() => {
    console.log(`Le Pokédex possède ${pokedex.length} Pokémons`)
  }, [pokedex])

  useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/" + params.idPokemon)
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
      {loading ? (
        <main>
          <CardPokemon data={dataPokemon} pokedex={pokedex} setPokedex={setPokedex} />
        </main>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default DetailsPokemon
