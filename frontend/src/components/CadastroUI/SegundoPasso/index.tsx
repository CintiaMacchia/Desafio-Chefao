import * as S from './styles';
import { Form } from 'react-bootstrap';

const FormContainer: React.FC = () => {

    return (
        <S.Body>
            <S.Container>  
                <Form className='w-100'>
                    <h2>Insira seu Estado e Cidade</h2>
                    <h4>* Obrigatório</h4>
                    <S.StyledFormGroup>
                        <S.StyledLabel>Estado *</S.StyledLabel>
                        <S.StyledSelect className='w-100' id='estado' name='estado'>
                            <option value='' selected> </option>
                            <option value='SP'>SP</option>
                            <option value='RJ'>RJ</option>
                        </S.StyledSelect>
                    </S.StyledFormGroup>
                    <S.StyledFormGroup>
                        <S.StyledLabel>Cidade *</S.StyledLabel>
                        <S.StyledInput className='w-100' id='senha' name='senha' type='text' />
                    </S.StyledFormGroup>
                    <S.StyledFormGroup>
                        <S.StyledButtonOrange>Continuar</S.StyledButtonOrange>
                    </S.StyledFormGroup>
                </Form>
            </S.Container>
        </S.Body>
    )
}

export default FormContainer;