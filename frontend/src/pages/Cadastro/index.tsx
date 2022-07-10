import Breadcrumbs from "../../components/Breadcrumbs";
import FormCadastro from "../../components/CadastroUI";
import { Footer } from "../../components/Footer";
import Menu from "../../components/Header";


const Cadastro: React.FC = () => {
    return (
        <>
            <Menu />
            <Breadcrumbs firstPage="Cadastro"/>
            <FormCadastro />
            <Footer />
        </>
    )
}

export default Cadastro;