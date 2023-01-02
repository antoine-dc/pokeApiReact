import './css/style.css'
import './css/normalize.css'
import data from "./data/data.json"

function App() {
  

  const helloList = <> {data.map((poke,index) =>  <article key={index}><figure >
    <picture>
        <img src={poke.image} alt={poke.name} title={poke.name} />
    </picture>
    <figcaption>
        <span className="types">{poke.apiTypes[0].name}</span>
        <h2>{poke.name}</h2>
        <ol>
        <li>Points de vie : {poke.stats.HP}</li>
        <li>Attaque : {poke.stats.attack}</li>
        <li>Défense : {poke.stats.defense}</li>
        <li>Attaque spécial : {poke.stats.special_attack}</li>
        <li>Vitesse : {poke.stats.speed}</li>
        </ol>
    </figcaption>
    </figure> </article>)} </>;


  return (<>{helloList }</>)
}

export default App
