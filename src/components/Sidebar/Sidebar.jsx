import { useState } from "react"
import "./Sidebar.scss"
import pokeball from "./../../assets/pokeball.png"

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return isOpen ? (
    <div className="lmj-cart">
      <button className="lmj-cart-toggle-button" onClick={() => setIsOpen(false)}>
        X
      </button>
      <h2>
        <img src={pokeball} alt="" />
        <p>Pokédex</p>
      </h2>
      <div>Votre Pokédex est vide</div>
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button className="lmj-cart-toggle-button" onClick={() => setIsOpen(true)}>
        <img src={pokeball} alt="" />
        <p>Pokédex</p>
      </button>
    </div>
  )
}

export default Sidebar
