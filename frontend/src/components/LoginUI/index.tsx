import { Form } from 'react-bootstrap';
import { ErrorMessage, Formik } from 'formik';
import baseApi from '../../services/MainApi/config';
import { loginUser } from '../../services/MainApi/users';
import * as Yup from 'yup';
import * as S from './styles';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logIn } from '../../store/users';

const LoginForm: React.FC = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const schema = Yup.object({
        email: Yup.string().email('E-mail não é válido').required('Campo E-mail é obrigatório'),
        password: Yup.string().required('Campo Senha é obrigatório').min(6, 'Senha deve ter pelo menos 6 caracteres.')
    }) 

    return (
        <S.Body>
            <Formik
                validationSchema={schema}
                initialValues={{
                    email: '',
                    password: ''
                }}
                onSubmit={async values => {
                    const { accessToken, user } = await loginUser(values);
                    // alert(JSON.stringify(user, null, 2))
                    dispatch(logIn({accessToken, user}));
                    //@ts-ignore
                    baseApi.defaults.headers["Authorization"] = `Bearer ${accessToken}`
                    navigate("/")
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
            <S.Container>
                <Form className='w-100' onSubmit={handleSubmit}>
                    <h2 className='login-h2'>Já possui cadastro? Faça o Login!</h2>
                    <Form.Group>
                        <S.StyledLabel>Email</S.StyledLabel>
                        <S.StyledInput
                            className='w-100'
                            id='email'
                            name='email'
                            type='email'
                            value={values.email}
                            onChange={handleChange}
                            isValid={touched.email && !errors.email}
                            isInvalid={touched.email && !!errors.email}
                        />
                        <ErrorMessage name='email' component={S.StyledError}/>
                    </Form.Group>
                    <Form.Group>
                        <S.StyledLabel>Senha</S.StyledLabel>
                        <S.StyledInput 
                            className='w-100'
                            id='password'
                            name='password'
                            type='password'
                            value={values.password}
                            onChange={handleChange}
                            isValid={touched.password && !errors.password}
                            isInvalid={touched.password && !!errors.password}
                        />
                        <ErrorMessage name='password' component={S.StyledError}/>
                    </Form.Group>
                    <a href='#' className='link'>Esqueceu a senha?</a>
                    <Form.Group className='mt-4'>
                        <S.StyledButtonOrange type='submit'>Login</S.StyledButtonOrange>
                    </Form.Group>
                </Form>
                <hr />
                <h2 className='login-h2'>É novo por aqui? Cadastre-se!</h2>
                <S.StyledButton href='/cadastrar'>Cadastrar</S.StyledButton>
            </S.Container>
            )}
            </Formik>
        </S.Body>
    )
}

export default LoginForm;