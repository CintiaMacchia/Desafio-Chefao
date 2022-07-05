import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Anuncio from "./pages/CriarAnuncios"
import Home from "./pages/Home"

// import { Container } from './styles';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anuncio" element={<Anuncio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
