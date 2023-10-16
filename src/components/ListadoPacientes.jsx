import React, {useEffect} from 'react'
import { Pacientes } from './Pacientes'

export const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  // useEffect(()=>{
  //   if(pacientes.length>0) {
  //     console.log("nuevo Paciente")
  //   }
  // },[pacientes])
  return (
    <div className='md:w-1/2 lg:w-2/5 md:h-screen overflow-y-scroll'>
      {pacientes && pacientes.length ? (<> <h2 className='font-black text-3xl text-center mb-5 '>Listado Pacientes</h2>
        <p className='text-lg mt-5 text-center mb-5'> Administra a tus {" "} <span className='text-indigo-600 font-bold'>pacientes y citas </span></p>
      </>
      ) : (<>
      <h2 className='font-black text-3xl text-center mb-5 '>Listado Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-5'>No existen {" "} <span className='text-indigo-600 font-bold'>pacientes y citas </span></p>
      </>)}
      {
        pacientes.map((paciente) => {
          return <Pacientes key={paciente.id}
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        })
      }

    </div>
  )
}
