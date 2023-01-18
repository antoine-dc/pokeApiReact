import "./css/normalize.css"
import "./css/style.css"
import data from "./data/data.json"
import { CardPokemon } from "./components/CardPokemon/CardPokemon"
import Sidebar from "./components/Sidebar/Sidebar"
import { useEffect, useState } from "react"
import logo from "./assets/pokemon.png"

function App() {
  const [pokedex, setPokedex] = useState([])
  const helloList = data.map((poke, index) => <CardPokemon data={poke} key={index} pokedex={pokedex} setPokedex={setPokedex} />)

  useEffect(() => {
    console.log(`Le Pokédex possède ${pokedex.length} Pokémons`)
  }, [pokedex])

  return (
    <>
      <h1>
        <img src={logo} alt="logo" />
      </h1>
      <div className="lmj-layout-inner">
        <Sidebar pokedex={pokedex} />
        <main>{helloList}</main>
      </div>
    </>
  )
}
export default App
