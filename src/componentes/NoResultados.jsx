import React from 'react'
import noResults from '../imagenes/noresultados.jpg'

export const NoResultados = () => {
  return (
    <div className='noResults animate__animated animate__flipInY'>
        <img src={noResults}/>
    </div>
  )
}
