import React, { useState } from 'react'

export const Pacientes = ({ paciente, setPaciente, eliminarPaciente }) => {
const handleEliminar=()=>{
  const respuesta=confirm("deseas eliminar ese paciente?")
  if(respuesta){
    eliminarPaciente(paciente.id)
  }
}
  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {" "}
        <span className='font-normal normal-case'>{paciente.nombre}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Padre de la mascota: {" "}
        <span className='font-normal normal-case'>{paciente.padre}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Correo: {" "}
        <span className='font-normal normal-case'>{paciente.correo}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Alta: {" "}
        <span className='font-normal normal-case'>{paciente.fecha}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {" "}
        <span className='font-normal normal-case'>{paciente.sintomas}</span>
      </p>
      <div className='flex justify-between mt-5'>
        <button
          type="button"
          className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md'
          onClick={()=>setPaciente(paciente)}
        >Editar</button>
        <button
          type="button"
          className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md'
          onClick={ handleEliminar}
        >Eliminar</button>
      </div>
    </div>
  )
}
