import { ErrorMessage } from "formik";
import * as Yup from 'yup';
import * as S from './styles';
import { CadastroLoginInput, CheckBoxInput } from "./CadastroInput";
import MultiStepForm, { FormStep } from "./MultiStepForm";
import CadastroSelect from "./CadastroSelectEstados";
import { createUser } from "../../services/MainApi/users";
import { useNavigate } from "react-router-dom";

const FormCadastro: React.FC = () => {
    
    const navigate = useNavigate();

    return (
        <S.Body>
            <S.Container>
                <MultiStepForm
                    initialValues={{
                        nome: '',
                        email: '',
                        password: ''

                    }}
                    onSubmit={async (values: any) => {
                        const user = await createUser(values);
                        alert(JSON.stringify(user, null, 2))
                        navigate('/confirma-cadastro')
                    }}
                >
                    <FormStep 
                        stepName='Usuário'
                        onSubmit={() => console.log('Primeiro Passo')}
                        validationSchema={Yup.object({
                            nome: Yup.string().required('Campo E-mail é obrigatório'),
                            email: Yup.string().email('E-mail não é válido').required('Campo E-mail é obrigatório'),
                            password: Yup.string().required('Campo Senha é obrigatório').min(6, 'Senha deve ter pelo menos 6 caracteres.'),
                            confirmaSenha: Yup.string().required('Campo Confirmar Senha é obrigatório').oneOf([Yup.ref('password'), null], 'As senhas digitadas devem ser idênticas.')
                        })}
                        >
                        <div style={{display: 'flex', flexFlow: 'column nowrap',width: '100%'}}>
                        <h2 className='signup__text'>Já possui cadastro? Faça o Login!</h2>
                        <S.StyledAnchor href='/login'>Login</S.StyledAnchor>
                        <hr />
                        <h2 className='signup__text'>É novo por aqui? Cadastre-se!</h2>
                        <h4 className='signup__pointer'>* Obrigatório</h4>
                        </div>
                        <S.StyledFormGroup>
                            <S.StyledLabel>Nome Completo *</S.StyledLabel>
                            <CadastroLoginInput name='nome' type='nome'/>
                            <ErrorMessage name='nome' component={S.StyledError} />
                        </S.StyledFormGroup>
                        <S.StyledFormGroup>
                            <S.StyledLabel>E-mail *</S.StyledLabel>
                            <CadastroLoginInput name='email' type='email'/>
                            <ErrorMessage name='email' component={S.StyledError} />
                        </S.StyledFormGroup>
                        <S.StyledFormGroup>
                            <S.StyledLabel>Senha *</S.StyledLabel>
                            <CadastroLoginInput id='password' name='password' type='password' />
                            <ErrorMessage name='password' component={S.StyledError} />
                        </S.StyledFormGroup>
                        <S.StyledFormGroup>
                            <S.StyledLabel>Confirme sua senha *</S.StyledLabel>
                            <CadastroLoginInput id='confirma-senha' name='confirmaSenha' type='password' />
                            <ErrorMessage name='confirmaSenha' component={S.StyledError} />
                        </S.StyledFormGroup>
                    </FormStep>
                    {/* <FormStep
                        stepName='Endereço'
                        onSubmit={() => console.log('Segundo Passo')}
                        validationSchema={Yup.object({
                            estado: Yup.string().required('Selectione seu Estado'),
                            cidade: Yup.string().required('Cidade é obrigatório'),
                            endereco: Yup.string().required('Endereco é obrigatório'),
                            numero: Yup.string().required('Número é obrigatório'),
                            cep: Yup.string().required('CEP é obrigatório'),
                            bairro: Yup.string().required('Bairro é obrigatório'),
                            termos: Yup.boolean().oneOf([true], 'Você deve concordar com os termos de serviço')
                        })}
                    >   
                        <div>
                        <h2 className='signup__text--bolder'>Insira seu Estado e Cidade</h2>
                        <h4 className='signup__pointer'>* Obrigatório</h4>
                        </div>
                        <S.StyledFormGroup>
                        <S.StyledLabel>Estado *</S.StyledLabel>
                            <CadastroSelect name='estado'/>
                            <ErrorMessage name='estado' component={S.StyledError} />
                        </S.StyledFormGroup>
                        <S.StyledFormGroup>
                            <S.StyledLabel>Cidade *</S.StyledLabel>
                            <CadastroLoginInput name='cidade' type='text'/>
                            <ErrorMessage name='cidade' component={S.StyledError}/>
                        </S.StyledFormGroup>
                        <S.StyledFormGroup>
                            <S.TwoInputsContainer>
                                    <div className="large-input">
                                        <S.StyledLabel>Endereço *</S.StyledLabel>
                                        <CadastroLoginInput name='endereco' type='text'/>
                                        <ErrorMessage name='endereco' component={S.StyledError} />
                                    </div>
                                    <div className="xs-input">
                                        <S.StyledLabel>Número *</S.StyledLabel>
                                        <CadastroLoginInput name='numero' type='text'/>
                                        <ErrorMessage name='numero' component={S.StyledError} />
                                    </div>
                            </S.TwoInputsContainer>
                        </S.StyledFormGroup>
                        <S.StyledFormGroup>
                            <S.TwoInputsContainer>
                                    <div className="large-input">
                                        <S.StyledLabel>CEP *</S.StyledLabel>
                                        <CadastroLoginInput name='cep' type='text'/>
                                        <ErrorMessage name='cep' component={S.StyledError} />
                                    </div>
                                    <div className="sm-input">
                                        <S.StyledLabel>Bairro *</S.StyledLabel>
                                        <CadastroLoginInput name='bairro' type='text'/>
                                        <ErrorMessage name='bairro' component={S.StyledError} />
                                    </div>
                            </S.TwoInputsContainer>
                        </S.StyledFormGroup>
                        <S.StyledFormGroup>
                            <S.StyledLabel>Complemento</S.StyledLabel>
                            <CadastroLoginInput name='complemento' type='text'/>
                        </S.StyledFormGroup>
                        <div style={{marginTop: '0.5rem'}}>
                            <CheckBoxInput className='checkbox-tos' type='checkbox' name='termos' /> <span className='checkbox-tos__text'>Eu li e os Termos de Serviço e as Políticas de Privacidade</span>
                        </div>
                            <ErrorMessage name='termos' component={S.StyledError} />
                    </FormStep> */}
                </MultiStepForm>
            </S.Container>
        </S.Body>
    )
}

export default FormCadastro;