import React from 'react'
import { Pacientes } from './Pacientes'

export const ListadoPacientes = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5 md:h-screen overflow-y-scroll'>
        <h2 className='font-black text-3xl text-center mb-5 '>Listado Pacientes</h2>
        <p className='text-lg mt-5 text-center mb-5'> Administra a tus {" "} <span className='text-indigo-600 font-bold'>pacientes y citas </span></p>
        <Pacientes/>
        <Pacientes/>
        <Pacientes/>
        <Pacientes/>

    </div>
  )
}
