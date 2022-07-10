import { FieldConfig, useField } from 'formik';
import { Form } from 'react-bootstrap';
import * as S from './styles';

const CadastroSelect = (props: any) => {

    const [field, meta] = useField(props)

    return (
        <>
            <S.StyledSelect
                {...field}
                {...props}
                isValid={meta.touched && !meta.error}
                isInvalid={meta.touched && !!meta.error}
                value={field.value}
            >
                <option value=''></option>
                {estados.map((estado) => (
                    <option value={estado.uf} key={estado.id}>{estado.nome}</option>

                ))}

            </S.StyledSelect>
        </>
    )
}

export default CadastroSelect;


const estados = [
    {
        id: 0,
        nome: 'Acre',
        uf: 'AC'
    }, 
    {
        id: 1,
        nome: 'Alagoas',
        uf: 'AL'
    }, 
    {
        id: 2,
        nome: 'Amapá',
        uf: 'AP'
    },
    {
        id: 3,
        nome: 'Amazonas',
        uf: 'AM'
    }, 
    {
        id: 4,
        nome: 'Bahia',
        uf: 'BA'
    }, 
    {
        id: 5,
        nome: 'Ceará',
        uf: 'CE'
    }, 
    {
        id: 6,
        nome: 'Distrito Federal',
        uf: 'DF'
    }, 
    {
        id: 7,
        nome: 'Espírito Santo',
        uf: 'ES'
    }, 
    {
        id: 8,
        nome: 'Goiás',
        uf: 'GO'
    }, 
    {
        id: 9,
        nome: 'Maranhão',
        uf: 'MA'
    }, 
    {
        id: 10,
        nome: 'Mato Grosso',
        uf: 'MT'
    }, 
    {
        id: 11,
        nome: 'Mato Grosso do Sul',
        uf: 'MS'
    }, 
    {
        id: 12,
        nome: 'Minas Gerais',
        uf: 'MG'
    }, 
    {
        id: 13,
        nome: 'Pará',
        uf: 'PA'
    }, 
    {
        id: 14,
        nome: 'Paraíba',
        uf: 'PB'
    }, 
    {
        id: 15,
        nome: 'Paraná',
        uf: 'PR'
    }, 
    {
        id: 16,
        nome: 'Pernambuco',
        uf: 'PE'
    }, 
    {
        id: 17,
        nome: 'Piauí',
        uf: 'PI'
    }, 
    {
        id: 18,
        nome: 'Rio de Janeiro',
        uf: 'RJ'
    }, 
    {
        id: 19,
        nome: 'Rio Grande do Norte',
        uf: 'RN'
    }, 
    {
        id: 20,
        nome: 'Rio Grande do Sul',
        uf: 'RS'
    }, 
    {
        id: 21,
        nome: 'Rondônia',
        uf: 'RO'
    }, 
    {
        id: 22,
        nome: 'Roraima',
        uf: 'RR'
    }, 
    {
        id: 23,
        nome: 'Santa Caratina',
        uf: 'SC'
    }, 
    {
        id: 24,
        nome: 'São Paulo',
        uf: 'SP'
    }, 
    {
        id: 25,
        nome: 'Sergipe',
        uf: 'SE'
    },
    {
        id: 26,
        nome: 'Tocantins',
        uf: 'TO'
    }
]  
