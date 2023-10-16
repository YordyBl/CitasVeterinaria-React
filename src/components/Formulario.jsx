import React, { useState, useEffect } from 'react'
import { Alerta } from '../components/Alerta';

export const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState("");
  const [padre, setPadre] = useState("");
  const [correo, setCorreo] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false)

  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre)
      setPadre(paciente.padre)
      setCorreo(paciente.correo)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])


  const generarId = () => {
    const random = Math.random().toString(36).substr(2);
    const fecha = Date.now().toString(36);
    return fecha + random
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, padre, correo, fecha, sintomas].includes("")) {
      setError(true)
      return
    } else {
      setError(false)
      //Objeto paciente
      const objetoPaciente = {
        nombre,
        padre,
        correo,
        fecha,
        sintomas,
        id: generarId()
      };
      
      if(paciente.id){
        //Editando el registro
        objetoPaciente.id=paciente.id;
        const pacientesActualizados = pacientes.map(pacienteState=>pacienteState.id===paciente.id ? objetoPaciente : pacienteState)
        setPacientes(pacientesActualizados);
        setPaciente({})
        
      }else{
        //nuevo registro
        objetoPaciente.id=generarId();
        setPacientes([...pacientes, objetoPaciente])
      }
      setNombre("");
      setPadre("");
      setCorreo("");
      setFecha("");
      setSintomas("");
    }


  }

  return (
    <div className='md:w-1/2 lg:w-3/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento de Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-5'>
        Añade Pacientes y {" "} <span className='text-indigo-600 font-bold' >Administralos</span>
      </p>

      <form onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5  mb-10'>
        {error && <Alerta>Todos los campos son obligatorios</Alerta>}
        <div className='mb-6'>
          <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
          <input id='mascota' className='border-2 rounded-md w-full mt-2 p-2 placeholder-gray-400' type="text" placeholder='nombre de la mascota'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='padre' className='block text-gray-700 uppercase font-bold'>Padre</label>
          <input id='padre' className='border-2 rounded-md w-full mt-2 p-2 placeholder-gray-400' type="text" placeholder='Nombre del padre'
            value={padre}
            onChange={e => setPadre(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Correo</label>
          <input id='email' className='border-2 rounded-md w-full mt-2 p-2 placeholder-gray-400' type="email" placeholder='Ingresa tu correo'
            value={correo}
            onChange={e => setCorreo(e.target.value)}
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Alta</label>
          <input id='alta' className='border-2 rounded-md w-full mt-2 p-2 placeholder-gray-400' type="date"
            value={fecha}
            onChange={e => setFecha(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>Sintomas</label>
          <textarea className='w-full border-2 rounded-md mt-2 p-2' placeholder='Describe los sintomas' id='sintomas'
            value={sintomas}
            onChange={e => setSintomas(e.target.value)}
          />
        </div>
        <input type="submit" className='bg-indigo-600 w-full border-2 rounded-md p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"} />
      </form>
    </div>

  )
}
