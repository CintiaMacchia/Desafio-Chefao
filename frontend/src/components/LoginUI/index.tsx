import * as S from './styles';
import { Form } from 'react-bootstrap';

const LoginForm: React.FC = () => {

    return (
        <S.Body>
            <S.Container>  
                <Form className='w-100'>
                    <h2>Já possui cadastro? Faça o Login!</h2>
                    <Form.Group>
                        <S.StyledLabel>Email</S.StyledLabel>
                        <S.StyledInput className='w-100' id='email' name='email' type='email' />
                    </Form.Group>
                    <Form.Group>
                        <S.StyledLabel>Senha</S.StyledLabel>
                        <S.StyledInput className='w-100' id='senha' name='senha' type='password' />
                    </Form.Group>
                    <a href='#' className='link'>Esqueceu a senha?</a>
                    <Form.Group className='mt-4'>
                        <S.StyledButtonOrange>Login</S.StyledButtonOrange>
                    </Form.Group>
                </Form>
                <hr />
                <h2>É novo por aqui? Cadastre-se!</h2>
                <a href='/cadastrar'><S.StyledButton>Cadastrar</S.StyledButton></a>
            </S.Container>
        </S.Body>
    )
}

export default LoginForm;