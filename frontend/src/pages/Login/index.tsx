import Breadcrumbs from '../../components/Breadcrumbs';
import { Footer } from '../../components/Footer';
import Menu from '../../components/Header';
import Login from '../../components/LoginUI';

const LoginPage: React.FC = () => {
    return (
        <>
            <Menu />
            <Breadcrumbs firstPage='login' />
                <Login />
            <Footer />
        </>
    )
}

export default LoginPage;