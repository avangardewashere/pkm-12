import "./App.css"
import routes from "./router"
import { memo } from "react"
import { BrowserRouter, useRoutes } from "react-router-dom"

const Router = () => {
  return useRoutes(routes)
}
const App = memo(() => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )
})

export default App
