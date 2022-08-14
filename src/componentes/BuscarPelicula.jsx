import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export const BuscarPelicula = () => {


  const [input, setInput] = useState("")  
  const [searchParams,setSearchParams] = useSearchParams();

  const handleSubmit = (e)=>{
    e.preventDefault();
    setSearchParams({filter: input}) ;
    setInput("");
  }  

  const handleOnChange = (e)=>{
    setInput(e.target.value);
  }

  return (
    <div className='buscador animate__animated animate__fadeIn listaPeliculas'>
        <form onSubmit={handleSubmit}>
            <input 
            className="form-control" 
            type="text" 
            value={input}
            onChange={handleOnChange}
            placeholder="Buscar pelicula..."
            />
            <button className=' my-2 form-control button btn btn-primary'>Buscar</button>
        </form>
    </div>
  )
}
