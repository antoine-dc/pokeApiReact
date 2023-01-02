import "./css/normalize.css"
import "./css/style.css"
import data from "./data/data.json"
import { CardPokemon } from "./components/CardPokemon"

function App() {
  const helloList = data.map((poke, index) => <CardPokemon data={poke} key={index} />)

  return <main>{helloList}</main>
}
export default App
