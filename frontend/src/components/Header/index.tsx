import { GoLocation } from "react-icons/go"
import { IoIosArrowDown } from "react-icons/io"
import { BsPerson } from "react-icons/bs"
import { BiSearch } from "react-icons/bi"
import logo from "../../components/assets/images/logo.png"
import "./styles.css"
import ButonEntrar from "../ButonCheio"
import ButtonBorda from "../ButtonBorda"
import ButonCheio from "../ButonCheio"
import { BrowserRouter as Router, Link } from "react-router-dom"

function Menu() {
  return (
    <header>
      <div className="row ">
        <div className="  shadow-sm p-3 mb-2bg-body rounded ">
          <div className="container-lg">
            <div className="d-flex justify-content-end">
              <GoLocation className="mx-2 fs-5  icon-header" />
              <a className="underline me-4 text-dark">
                Todos os Estados
                <IoIosArrowDown />{" "}
              </a>
              <BsPerson className="mx-2 fs-5 icon-header" />
              <a className=" underline text-dark" href="/perfil">
                Minha Conta{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="container-lg my-4">
          <div className="d-flex justify-content-center gap-4 align-items-center">
            <div>
              <div>
                <img src={logo} alt="logo" title="logo-do-site" />
              </div>
            </div>
            <div>
              <div className="d-flex ">
                {" "}
                <input
                  className="barra-de-pesquisa d-flex"
                  type="text"
                  placeholder="Pesquise os materias didáticos que o seu filho precisa"
                />
                <BiSearch className="icon-search" />
              </div>
            </div>
            <div>
            <Link to="/faboritos">
            <ButonCheio typeButton="button" text={"Favoritos"} />
              </Link>
             
            </div>
            <div>
              <Link to="/anuncio">
                <ButtonBorda typeButton="button" text={"Anunciar"} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="categorias">
        <div className="container">
          <div className="col-md-12 d-flex justify-content-center categories-navbar">
            <a href="#" className="link-nav underline">
              Todas as Categorias
            </a>
            <a href="#" className="link-nav underline">
              Lancheiras
            </a>
            <a href="#" className="link-nav underline">
              Listas Escolares
            </a>
            <a href="#" className="link-nav underline">
              Livros
            </a>
            <a href="#" className="link-nav underline">
              Papelaria
            </a>
            <a href="#" className="link-nav underline">
              Uniformes
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Menu
