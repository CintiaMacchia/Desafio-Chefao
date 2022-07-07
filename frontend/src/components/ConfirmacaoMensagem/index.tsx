import "./style.css"
import check from "../assets/images/check.jpg"

const ConfirmacaoMensagem: React.FC = () => {
  return (
    <div className="confirm">
      <img className="img-check" src={check} alt="check" />

      <h1 className="titulo">Sua mensagem foi enviada!</h1>

      <h2 className="subtexto">
        Por favor, acompanhe seu e-mail pois a pessoa poderá te responder em
        breve.
      </h2>

      <button className="confirm-button">Ir para a Página Principal</button>
    </div>
  )
}

export default ConfirmacaoMensagem
