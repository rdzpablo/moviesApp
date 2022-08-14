import React from 'react'
import {BrowserRouter , Routes, Route, Link } from "react-router-dom";
import { PeliculaDetalles } from '../componentes/PeliculaDetalles';
import { MoviesApp } from '../MoviesApp';

export const Rutaprincipal = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesApp/>} />
        <Route path="/movies/:movieId" element={<PeliculaDetalles/>} />
      </Routes>
    </BrowserRouter>
  )
}
