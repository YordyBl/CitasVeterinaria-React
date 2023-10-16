import React from 'react'

export const Alerta = ({children}) => {
  return (
    <div className='bg-red-800 text-white text-center uppercase font-bold mb-2 rounded-md'>
        <p>{children}</p>
    </div>
    
  )
}
