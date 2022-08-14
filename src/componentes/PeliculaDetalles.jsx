import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getPeliculas } from '../funciones/getPeliculas';

import noimagen from '../imagenes/noimagen.jpg'
import popcorn from '../imagenes/popcornLentes.png'

export const PeliculaDetalles = () => {

  const {movieId} = useParams();  
  
  const [loading, setLoading] = useState(true);
  const [pelicula, setPelicula] = useState(null);

  const navigate = useNavigate();

  const handleVolver = ()=>{
    navigate(-1);
  } 

  useEffect(() => {
    setLoading(true);
    getPeliculas("movie/"+movieId).then(data => setPelicula(data));
    setLoading(false);
  }, [movieId])
  
  if(loading){
    return <div className='bloque_spinner'>
              <div className="spinner"></div>
          </div>
  }

  if(!pelicula){
    return null;
  }
  const img = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className='aplicacionMovies animate__animated animate__fadeIn'>

      <div className='tituloprincipal'>
      <img src={popcorn}/>
      <Link to="/" > <h1 className='titulo'>BlinMovies</h1></Link> 
      <img src={popcorn}/>
      </div>

      <div className='detalles'>
        <div className='animate__animated animate__flipInY detallesImagen'>
            <img className='detalles-img' width="auto" height="400px" src={pelicula.poster_path ? img+pelicula.poster_path : noimagen}/>
        </div>
        <div className='animate__animated animate__fadeIn detallesTexto'>
            <h4 className='detallesTitulo'>{pelicula.title}</h4>
            <ul>
                {
                    pelicula.genres.map(genre =>{
                        return <li className='detallesGenero'>{genre.name}</li>
                    })
                }
            </ul>
            
            <p className='detallesPeli'>{pelicula.overview}</p>
            <button onClick={handleVolver} className='btn btn-large btn-primary'><span className='atras mx-3 '>ATRÁS</span></button>
        </div>
    </div>
    </div>
    
  )
}
