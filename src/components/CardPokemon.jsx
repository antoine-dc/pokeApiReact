export function CardPokemon(props) {
  let poke = props.data
  return (
    <article
      key={props.index}
      style={{
        backgroundColor: getColorHexa(poke.apiTypes[0].name),
        borderColor: getColorHexa(poke.apiTypes[0].name),
      }}
    >
      <figure>
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
      </figure>
    </article>
  )
}

function getColorHexa(nameType) {
  let color
  switch (nameType) {
    case "Eau":
      color = "blue"
      break

    case "Plante":
      color = "green"
      break

    case "Poison":
      color = "#D850C2"
      break

    case "Vol":
      color = "#738DDB"
      break

    case "Feu":
      color = "orange"
      break

    case "Insecte":
      color = "#70B901"
      break

    case "Électrik":
      color = "#FFD244"
      break

    case "Sol":
      color = "#CD793F"
      break

    case "Fée":
      color = "pink"
      break

    case "Combat":
      color = "darkred"
      break

    case "Psy":
      color = "#FD6960"
      break

    case "Acier":
      color = "#246A79"
      break

    case "Glace":
      color = "#67D1C8"
      break

    case "Roche":
      color = "#CBB866"
      break

    case "Dragon":
      color = "#1C6ABB"
      break

    default:
      color = "grey"
      break
  }

  return color
}
