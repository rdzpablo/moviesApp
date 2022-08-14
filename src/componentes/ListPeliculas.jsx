import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { useSearchParams } from 'react-router-dom';
import { getPeliculas } from '../funciones/getPeliculas';
import { Pelicula } from './Pelicula'


import noimagen from '../imagenes/noimagen.jpg'
import { NoResultados } from './NoResultados';


export const ListPeliculas = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [Page, setPage] = useState(1);
  const [Hasmore, setHasmore] = useState(true);
  const [Resultados, setResultados] = useState(true)

  const [searchParams] = useSearchParams();

  const filtro = searchParams.get("filter");
  console.log(filtro);

  useEffect(() => {
    const searchUrl = filtro ? "/search/movie?query="+filtro + "&page=" + Page : "discover/movie?page=" + Page;
     getPeliculas(searchUrl).then(data => { data.results.length === 0 ? setResultados(false) :
     setPeliculas((prevPeliculas)=> prevPeliculas.concat(data.results));
     setHasmore(Page < data.total_pages);
    });
  },[filtro,Page]);

  
    if (Resultados === false){
      return <NoResultados/>
    }

    

  return (
    <InfiniteScroll 
    dataLength={peliculas.length} 
    hasMore={Hasmore}
    loader={<div className='bloque_spinner'><div className="spinner"></div></div>}
    next={()=>setPage ((prevPage)=> prevPage + 1)}
    >
      
        <ul className=' listaPeliculas'>
            { 
              peliculas.map(peli =>
                <Pelicula 
                key={peli.id}
                id={peli.id}
                titulo={peli.title}
                img={ peli.poster_path ? 'https://image.tmdb.org/t/p/w500/' + peli.poster_path : noimagen }
                />
                )
            }
        </ul>
        
   </InfiniteScroll>
  )
}
