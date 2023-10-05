import { Header } from "./components/Header"
import { Formulario } from "./components/Formulario"
import { ListadoPacientes } from "./components/ListadoPacientes"

function App() {
  return (
    <div className="container mx-auto mt-5">
      <Header />
      <div className="mt-10 md:flex">
      <Formulario />
      <ListadoPacientes />

      </div>

    </div>

  )
}

export default App