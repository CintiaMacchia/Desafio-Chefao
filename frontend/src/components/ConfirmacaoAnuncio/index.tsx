import "./style.css"
import check from "../assets/images/check.jpg"
import { Link } from "react-router-dom"

const ConfirmacaoAnuncio: React.FC = () => {
  return (
    <div className="confirm">
      <img className="img-check" src={check} alt="check" />

      <h1 className="titulo">Seu anúncio foi publicado!</h1>

      <h2 className="subtexto">
        Agora é só aguardar que as pessoas entrarão em contato via telefone,
        whatsapp ou por e-mail.
      </h2>

      <Link to="/">
        <button className="confirm-button">Ir para a Página Principal</button>
      </Link>
    </div>
  )
}

export default ConfirmacaoAnuncio
