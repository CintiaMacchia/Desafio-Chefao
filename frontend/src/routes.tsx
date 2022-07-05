import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cadastro from "./pages/Cadastro"
import Anuncio from "./pages/CriarAnuncios"
import Home from "./pages/Home"
import Recipes from "./pages/produtos"
import RecipesDetail from "./pages/RecipesDetail"

// import { Container } from './styles';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singUp" element={<Cadastro />} />
        <Route path="/anuncio" element={<Anuncio />} />

        <Route path="/receitas" element={<Recipes />}>
          <Route path=":id" element={<RecipesDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
