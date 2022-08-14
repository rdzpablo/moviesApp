import React from 'react'
import { Link } from 'react-router-dom'
export const Pelicula = ({img,titulo,id}) => {


  return (
    < Link to={"/movies/"+id} >
        <li className='pelicula animate__animated animate__fadeIn'>
            <img className='pelicula-img' width="auto" height="300px" src={img}/>
            <h4>{titulo}</h4>
        </li>
    </Link>
  )
}
