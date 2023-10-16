import { Header } from "./components/Header"
import { useState, useEffect } from "react"
import { Formulario } from "./components/Formulario"
import { ListadoPacientes } from "./components/ListadoPacientes"

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect (()=>{
    const obtenerLS=()=>{
      const pacientesLS=JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS);
    }
    obtenerLS();
  }, []);

  //Local storage
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])
  //Eliminar Paciente
  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }
  return (
    <div className="container mx-auto mt-5">
      <Header />
      <div className="mt-10 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />

      </div>

    </div>

  )
}

export default App
