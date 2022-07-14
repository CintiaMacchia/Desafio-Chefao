import { useState } from 'react';
import { Form } from 'react-bootstrap';
import * as S from './styles'
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const ContactUser: React.FC = () => {

    const itemName = 'Mochila Infantil do Batman';
    const message =  `Olá, vi seu anúncio no PassoRepasso da ${itemName} e gostaria de conversar.`;

    const navigate = useNavigate();
    const [charCount, setCharCount] = useState(0);

    const schema = Yup.object({
        mensagemContato: Yup.string().required('É necessário escrever uma mensagem ao anunciante.'),
        termosContato: Yup.boolean().oneOf([true], 'Você deve concordar com os termos de serviço.')
    })


    return (
        <S.StyledContainer>
            <S.StyledContactInfo>
                <h2 className='contact-title'>Whatsapp</h2>
                <p className='contact-text'><a className='contact-link' href={`https://api.whatsapp.com/send?phone=5567998765432&text=${message}`} target='_blank'>(11) 99876-5432</a></p>
            </S.StyledContactInfo>
            <S.StyledContactContainer>
                <h2 className='contact-title'>Envio de E-mail</h2>
                <p className='contact-text'>Envie uma mensagem para o anunciante por aqui e receba a resposta por e-mail.</p>
                <Formik
                validationSchema={schema}
                initialValues={{
                    mensagemContato: '',
                    termosContato: false
                }}
                onSubmit={values => {
                    alert(JSON.stringify(values, null, 2))
                    navigate("/confirma-mensagem")
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <S.StyledLabelsGroup>
                            <Form.Label className='contact-label'>Mensagem *</Form.Label>
                            <h6 className='char-counter'>{charCount}/240</h6>
                        </S.StyledLabelsGroup>
                        <Form.Control 
                            as='textarea'
                            id='mensagemContato'
                            name='mensagemContato'
                            className='message-area'
                            rows={5}
                            maxLength={240}
                            onChange={e=> {handleChange(e); setCharCount(e.target.value.length)}}
                            value={values.mensagemContato}
                            isValid={touched.mensagemContato && !errors.mensagemContato}
                            isInvalid={touched.mensagemContato && !!errors.mensagemContato}
                        />
                    </Form.Group>
                    <Form.Group className='tos'>
                        <S.CheckBox 
                            id='termosContato'
                            name='termosContato'
                            value={values.termosContato}
                            onChange={handleChange}
                            isValid={touched.termosContato && !errors.termosContato}
                            isInvalid={touched.termosContato && !!errors.termosContato}
                        />
                        <Form.Check.Label>Eu li os Termos de Serviço e as Políticas de Privacidade</Form.Check.Label>
                    </Form.Group>
                    <Form.Group>
                        <S.StyledButtonOrange type='submit'>Enviar</S.StyledButtonOrange>
                    </Form.Group>
                </Form>
                )}
                </Formik>
            </S.StyledContactContainer>
        </S.StyledContainer>
    )

}

export default ContactUser;