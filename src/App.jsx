import "./css/normalize.css"
import "./css/style.css"
import data from "./data/data.json"
import { CardPokemon } from "./components/CardPokemon/CardPokemon"
import Sidebar from "./components/Sidebar/Sidebar"
import { useState } from "react"
import logo from "./assets/pokemon.png"

function App() {
  const helloList = data.map((poke, index) => <CardPokemon data={poke} key={index} />)
  const [cart, updateCart] = useState([])

  return (
    <>
      <h1>
        <img src={logo} alt="logo" />
      </h1>
      <div className="lmj-layout-inner">
        <Sidebar />
        <main>{helloList}</main>
      </div>
    </>
  )
}
export default App
