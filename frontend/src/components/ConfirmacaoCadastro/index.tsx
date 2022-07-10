import "./style.css"
import check from "../assets/images/check.jpg"
import { Link } from "react-router-dom"

const ConfirmacaoCadastro: React.FC = () => {
  return (
    <div className="confirm">
      <img className="img-check" src={check} alt="check" />

      <h1 className="titulo">Seu cadastro foi realizado!</h1>

      <h2 className="subtexto">
        Agora você pode publicar anúncios e entrar em contato com outros
        anunciantes.
      </h2>
      <Link to="/perfil">
        <button className="confirm-button">Ir para Minha Conta</button>
      </Link>
    </div>
  )
}

export default ConfirmacaoCadastro
