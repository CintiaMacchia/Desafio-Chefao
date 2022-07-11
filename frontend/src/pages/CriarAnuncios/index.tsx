import Breadcrumbs from "../../components/Breadcrumbs"
import { Footer } from "../../components/Footer"
import FormAnuncio from "../../components/FormAnuncio"
import Menu from "../../components/Header"

const Anuncio = () => {
  return (
    <>
      <Menu />
      <Breadcrumbs firstPage='Anunciar' />
      <FormAnuncio />
      <Footer />
    </>
  )
}

export default Anuncio
