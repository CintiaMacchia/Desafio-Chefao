import Breadcrumbs from "../../components/Breadcrumbs"
import ConfirmacaoAnuncio from "../../components/ConfirmacaoAnuncio"
import { Footer } from "../../components/Footer"
import Menu from "../../components/Header"

const ConfirmaAnuncio = () => {
  return (
    <>
      <Menu />
      <Breadcrumbs firstPage='Confirmação do Anúncio' />
      <ConfirmacaoAnuncio />
      <Footer />
    </>
  )
}

export default ConfirmaAnuncio
