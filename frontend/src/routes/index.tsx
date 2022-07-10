import { Routes as Wrapper, BrowserRouter, Route } from "react-router-dom"
import { useSelector } from "react-redux"

import Cadastro from "../pages/Cadastro"
import ConfirmaAnuncio from "../pages/ConfirmaAnuncio"
import ConfirmaCadastro from "../pages/ConfirmaCadastro"
import ConfirmaMensagem from "../pages/ConfirmaMensagem"
import Anuncio from "../pages/CriarAnuncios"
import Home from "../pages/Home"
import LoginPage from "../pages/Login"
import Produtos from "../pages/Produtos"
import ProdutosDetail from "../pages/ProdutosDetail"
import RequireAuth from "./auth"
import PerfilUsuario from "../pages/PerfilUsuario"
import Contato from "../pages/Contatos"

function AppRoutes(): JSX.Element {
  return (
    <BrowserRouter>
      <Wrapper>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar" element={<Cadastro />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/confirma-anuncio" element={<ConfirmaAnuncio />} />
        <Route path="/confirma-cadastro" element={<ConfirmaCadastro />} />
        <Route path="/confirma-mensagem" element={<ConfirmaMensagem />} />
        <Route
          path="/anuncio"
          element={
            /*<RequireAuth>*/
            <Anuncio />
            /*</RequireAuth>*/
          }
        />
        <Route
          path="/perfil"
          element={
            <RequireAuth>
              <PerfilUsuario />
            </RequireAuth>
          }
        />
        <Route path="/produtos" element={<Produtos />}>
          {/* <Route path=":id" element={<ProdutosDetail />} /> */}
        </Route>
        <Route path="/d-produto" element={<ProdutosDetail />} />
        <Route
          path="/contato:id"
          element={
            <RequireAuth>
              <Contato />
            </RequireAuth>
          }
        />
      </Wrapper>
    </BrowserRouter>
  )
}

export default AppRoutes
