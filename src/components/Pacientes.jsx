import React from 'react'

export const Pacientes = () => {
  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
          <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {" "} 
            <span className='font-normal normal-case'>Misha</span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>Padre de la mascota: {" "} 
            <span className='font-normal normal-case'>Yordy</span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>Correo: {" "} 
            <span className='font-normal normal-case'>correo@correo.com</span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>Alta: {" "} 
            <span className='font-normal normal-case'>10 diciembre</span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {" "} 
            <span className='font-normal normal-case'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptatum perferendis, cumque officia unde, nobis sapiente corporis autem sunt quibusdam libero alias, adipisci tempora saepe error praesentium soluta. Aut, aspernatur.</span>
          </p>
        </div>
  )
}
