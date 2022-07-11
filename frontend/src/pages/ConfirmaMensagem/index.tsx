import Breadcrumbs from "../../components/Breadcrumbs"
import ConfirmacaoMensagem from "../../components/ConfirmacaoMensagem"
import { Footer } from "../../components/Footer"
import Menu from "../../components/Header"

const ConfirmaMensagem = () => {
  return (
    <>
      <Menu />
      <Breadcrumbs firstPage='Confirmação de Contato' />
      <ConfirmacaoMensagem />
      <Footer />
    </>
  )
}

export default ConfirmaMensagem
