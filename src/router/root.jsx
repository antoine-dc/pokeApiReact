import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import ErrorPage from "../pages/404"
import MentionsLegales from "../pages/MentionsLegales"
import DetailsPokemon from "../pages/DetailsPokemon"
import Home from "../pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/mentions-legales",
        element: <MentionsLegales />,
      },
      {
        path: "/pokemons/:idPokemon",
        element: <DetailsPokemon />,
      },
    ],
  },
])

export default router
