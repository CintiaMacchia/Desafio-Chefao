import { Footer } from '../../components/Footer';
import Menu from '../../components/Header';
import Login from '../../components/LoginUI';

const LoginPage: React.FC = () => {
    return (
        <>
            <Menu />
                <Login />
            <Footer />
        </>
    )
}

export default LoginPage;