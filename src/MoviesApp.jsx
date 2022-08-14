import React from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom';
import { BuscarPelicula } from './componentes/BuscarPelicula'
import { ListPeliculas } from './componentes/ListPeliculas'

import { FaArrowCircleUp } from 'react-icons/fa';
import popcorn from './imagenes/popcornLentes.png'

export const MoviesApp = () => {

  const [searchParams] = useSearchParams();

  const filtro = searchParams.get("filter");
  console.log(filtro);

  return (
    <div className='aplicacionMovies animate__animated animate__fadeIn'>
        <div  id="titulo"className='tituloprincipal'>
          <img src={popcorn}/>
          <Link to="/" > <h1 className='titulo'>BlinMovies</h1></Link> 
          <img src={popcorn}/>
        </div>
        <BuscarPelicula/>
        <ListPeliculas key={filtro} />
        <button className='btn btn-primary botonFijo animate__animated animate__fadeIn'> <a href="#titulo"><FaArrowCircleUp /></a></button>
    </div>
    
  )
}
