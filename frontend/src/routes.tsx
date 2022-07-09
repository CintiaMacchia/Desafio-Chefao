import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Cadastro from "./pages/Cadastro"
import ConfirmaAnuncio from "./pages/ConfirmaAnuncio"
import ConfirmaCadastro from "./pages/ConfirmaCadastro"
import ConfirmaMensagem from "./pages/ConfirmaMensagem"
import Anuncio from "./pages/CriarAnuncios"
import Home from "./pages/Home"
import Produtos from "./pages/Produtos"

import ProdutosDetail from "./pages/ProdutosDetail"



const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/singUp" element={<Cadastro />} />
        <Route path="/confirma-anuncio" element={<ConfirmaAnuncio />} />
        <Route path="/confirma-cadastro" element={<ConfirmaCadastro />} />
        <Route path="/confirma-mensagem" element={<ConfirmaMensagem />} />
        <Route path="/anuncio" element={<Anuncio />} />
        <Route path="/produtos" element={<Produtos/>}>
       
          {/* <Route path=":id" element={<ProdutosDetail />} /> */}
        </Route>
        <Route path="/d-produto" element={<ProdutosDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
