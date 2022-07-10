import * as S from './style';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../store/users';
import { User } from  '../../@types';
import { RootStore } from '../../store';

const Perfil: React.FC = () => {

    const dispatch = useDispatch();

    const email = useSelector((state: RootStore) => state.persistedReducer.email);
    const cidade = useSelector((state: RootStore) => state.persistedReducer.cidade);
    const estado = useSelector((state: RootStore) => state.persistedReducer.estado);
    const handleLogout =() => {
        dispatch(logOut())
    }
    return (
        <>
        
            <S.StyledHeader>
                <h2>Minha Conta</h2>
            </S.StyledHeader>
            <S.StyledMain>
                <S.StyledContainer>
                    <h3>Cadastro</h3>
                    <p>Para alterar seu cadastro, entre em contato com nosso suporte no e-mail atendimento@empresa.com</p>
                    <h4>Estado</h4>
                    <p>{estado}</p>
                    <h4>Cidade</h4>
                    <p>{cidade}</p>
                    <h4>E-mail</h4>
                    <p>{email}</p>
                    <h4>Senha</h4>
                    <p>**************</p>
                    <div>
                        <S.StyledButton>Página Principal</S.StyledButton>
                        <br />
                        <S.StyledButtonOrange href='/' onClick={handleLogout}>Desconectar</S.StyledButtonOrange>
                    </div>
                </S.StyledContainer>
            </S.StyledMain>
        </>
    )
}

export default Perfil;