import Breadcrumbs from "../../components/Breadcrumbs";
import ContactUser from "../../components/ContatoUI";
import { Footer } from "../../components/Footer";
import Menu from "../../components/Header";


const Contato: React.FC = () => {
    return (
        <>
            <Menu />
            <Breadcrumbs firstPage="Contato"/>
            <ContactUser />
            <Footer />
        </>
    )
}

export default Contato;