import Breadcrumbs from "../../components/Breadcrumbs"
import ConfirmacaoCadastro from "../../components/ConfirmacaoCadastro"
import { Footer } from "../../components/Footer"
import Menu from "../../components/Header"

const ConfirmaCadastro = () => {
  return (
    <>
      <Menu />
      <Breadcrumbs firstPage='Confirmação de Cadastro' />
      <ConfirmacaoCadastro />
      <Footer />
    </>
  )
}

export default ConfirmaCadastro
