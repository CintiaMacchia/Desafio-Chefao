import { ErrorMessage } from "formik";
import * as Yup from 'yup';
import * as S from './styles';
import { CadastroLoginInput, CheckBoxInput } from "./CadastroInput";
import MultiStepForm, { FormStep } from "./MultiStepForm";
import CadastroSelect from "./CadastroSelectEstados";
import { createUser } from "../../services/MainApi/users";

const FormCadastro: React.FC = () => {
    

    return (
        <S.Body>
            <S.Container>
                <MultiStepForm
                    initialValues={{
                        email: '',
                        password: '',
                        confirmaSenha: '',
                        estado: '',
                        cidade: '',
                        endereco: '',
                        numero: '',
                        cep: '',
                        bairro: '',
                        complemento: '',
                        termos: false

                    }}
                    onSubmit={async (values: any) => {
                        const user = await createUser(values);
                        alert(JSON.stringify(user, null, 2))
                    }}
                >
                    <FormStep 
                        stepName='Usuário'
                        onSubmit={() => console.log('Primeiro Passo')}
                        validationSchema={Yup.object({
                            email: Yup.string().email('E-mail não é válido').required('Campo E-mail é obrigatório'),
                            password: Yup.string().required('Campo Senha é obrigatório').min(6, 'Senha deve ter pelo menos 6 caracteres.'),
                            confirmaSenha: Yup.string().required('Campo Confirmar Senha é obrigatório').oneOf([Yup.ref('password'), null], 'As senhas digitadas devem ser idênticas.')
                        })}
                        >
                        <div style={{display: 'flex', flexFlow: 'column nowrap',width: '100%'}}>
                        <h2>Já possui cadastro? Faça o Login!</h2>
                        <S.StyledAnchor>Login</S.StyledAnchor>
                        <hr />
                        <h2>É novo por aqui? Cadastre-se!</h2>
                        <h4>* Obrigatório</h4>
                        </div>
                        <S.StyledFormGroup>
                            <S.StyledLabel>E-mail *</S.StyledLabel>
                            <CadastroLoginInput name='email' type='email'/>
                            <ErrorMessage name='email' />
                        </S.StyledFormGroup>
                        <S.StyledFormGroup>
                            <S.StyledLabel>Senha *</S.StyledLabel>
                            <CadastroLoginInput id='password' name='password' type='password' />
                            <ErrorMessage name='password' />
                        </S.StyledFormGroup>
                        <S.StyledFormGroup>
                            <S.StyledLabel>Confirme sua senha *</S.StyledLabel>
                            <CadastroLoginInput id='confirma-senha' name='confirmaSenha' type='password' />
                            <ErrorMessage name='confirmaSenha' />
                        </S.StyledFormGroup>
                    </FormStep>
                    <FormStep
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
                        <S.StyledFormGroup>
                        <S.StyledLabel>Estado *</S.StyledLabel>
                            <CadastroSelect name='estado'/>
                            <ErrorMessage name='estado' />
                        </S.StyledFormGroup>
                        <S.StyledFormGroup>
                            <S.StyledLabel>Cidade *</S.StyledLabel>
                            <CadastroLoginInput name='cidade' type='text'/>
                            <ErrorMessage name='cidade' component={S.StyledError}/>
                        </S.StyledFormGroup>
                        <S.StyledFormGroup>
                            <div style={{display: 'flex', flexFlow: 'row nowrap', gap: '1rem'}}>
                                    <div style={{display: 'flex', flexFlow:'column nowrap', flex: '1'}}>
                                        <S.StyledLabel>Endereço *</S.StyledLabel>
                                        <CadastroLoginInput name='endereco' type='text'/>
                                        <ErrorMessage name='endereco' component={S.StyledError} />
                                    </div>
                                    <div style={{display: 'flex', flexFlow:'column nowrap', width:'7.25rem', marginLeft: '1.125rem'}}>
                                        <S.StyledLabel>Número *</S.StyledLabel>
                                        <CadastroLoginInput name='numero' type='text'/>
                                        <ErrorMessage name='numero' component={S.StyledError} />
                                    </div>
                            </div>
                        </S.StyledFormGroup>
                        <S.StyledFormGroup>
                            <div style={{display: 'flex', flexFlow: 'row nowrap', gap: '1rem'}}>
                                    <div style={{display: 'flex', flexFlow:'column nowrap', width:'10.375rem'}}>
                                        <S.StyledLabel>CEP *</S.StyledLabel>
                                        <CadastroLoginInput name='cep' type='text'/>
                                        <ErrorMessage name='cep' component={S.StyledError} />
                                    </div>
                                    <div style={{display: 'flex', flexFlow:'column nowrap', flex: '1'}}>
                                        <S.StyledLabel>Bairro *</S.StyledLabel>
                                        <CadastroLoginInput name='bairro' type='text'/>
                                        <ErrorMessage name='bairro' component={S.StyledError} />
                                    </div>
                            </div>
                        </S.StyledFormGroup>
                        <S.StyledFormGroup>
                            <S.StyledLabel>Complemento</S.StyledLabel>
                            <CadastroLoginInput name='complemento' type='text'/>
                        </S.StyledFormGroup>
                            <CheckBoxInput name='termos' id='termos'/>Li e concordo
                            <ErrorMessage name='termos' component={S.StyledError} />
                    </FormStep>
                </MultiStepForm>
            </S.Container>
        </S.Body>
    )
}

export default FormCadastro;