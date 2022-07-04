import * as S from './styles';
import { Form } from 'react-bootstrap';

const FormContainer: React.FC = () => {

    return (
        <S.Body>
        
            <S.Container>  
                <h2>Já possui cadastro? Faça o Login!</h2>
                <S.StyledButton>Login</S.StyledButton>
                <hr />
                <Form className='w-100'>
                    <h2>É novo por aqui? Cadastre-se!</h2>
                    <h4>* Obrigatório</h4>
                    <Form.Group>
                        <S.StyledLabel>Email *</S.StyledLabel>
                        <S.StyledInput className='w-100' id='email' name='email' type='email' />
                    </Form.Group>
                    <Form.Group>
                        <S.StyledLabel>Senha *</S.StyledLabel>
                        <S.StyledInput className='w-100' id='senha' name='senha' type='password' />
                    </Form.Group>
                    <Form.Group className='mt-4'>
                        <S.StyledButtonOrange>Continuar</S.StyledButtonOrange>
                    </Form.Group>
                </Form>
            </S.Container>
        </S.Body>
    )
}

export default FormContainer;