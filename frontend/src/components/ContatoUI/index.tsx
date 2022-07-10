import { useState } from 'react';
import { Form } from 'react-bootstrap';
import * as S from './styles';

const ContactUser: React.FC = () => {

    const [charCount, setCharCount] = useState(0);

    return (
        <S.StyledContainer>
            <S.StyledContactInfo>
                <h2 className='contact-title'>Whatsapp</h2>
                <p className='contact-text'>(11) 99999-9999</p>
            </S.StyledContactInfo>
            <S.StyledContactContainer>
                <h2 className='contact-title'>Envio de E-mail</h2>
                <p className='contact-text'>Envie uma mensagem para o anunciante por aqui e receba a resposta por e-mail.</p>
                <Form>
                    <Form.Group>
                        <S.StyledLabelsGroup>
                            <Form.Label className='contact-label'>Mensagem *</Form.Label>
                            <h6 className='char-counter'>{charCount}/240</h6>
                        </S.StyledLabelsGroup>
                        <Form.Control as='textarea' className='message-area' rows={5} maxLength={240} onChange={event => setCharCount(event.target.value.length)}/>
                    </Form.Group>
                    <Form.Group className='tos'>
                        <Form.Check label='Eu li os Termos de Serviço e as Políticas de Privacidade' />
                    </Form.Group>
                    <Form.Group>
                        <S.StyledButtonOrange>Enviar</S.StyledButtonOrange>
                    </Form.Group>
                </Form>
            </S.StyledContactContainer>
        </S.StyledContainer>
    )

}

export default ContactUser;