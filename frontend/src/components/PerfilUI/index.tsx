import * as S from './style';

const Perfil = () => {
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
                    <p>SP</p>
                    <h4>Cidade</h4>
                    <p>São Paulo</p>
                    <h4>E-mail</h4>
                    <p>maria@gmail.com</p>
                    <h4>Senha</h4>
                    <p>**************</p>
                    <div>
                        <S.StyledButton>Página Principal</S.StyledButton>
                        <br />
                        <S.StyledButtonOrange>Desconectar</S.StyledButtonOrange>
                    </div>
                </S.StyledContainer>
            </S.StyledMain>
        </>
    )
}

export default Perfil