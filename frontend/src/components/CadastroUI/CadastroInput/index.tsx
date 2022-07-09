import { FieldConfig, useField } from 'formik';
import { Form } from 'react-bootstrap';
import * as S from './styles';

export const CadastroLoginInput = (props: any) => {

    const [field, meta] = useField(props)

    return (
        <>
            <S.StyledInput
                {...field}
                {...props}
                isValid={meta.touched && !meta.error}
                isInvalid={meta.touched && !!meta.error}
            />
        </>
    )
}

export const CheckBoxInput = (props: any) => {

    const [field, meta] = useField(props);

    return (
        // <>
        //     <S.StyledCheckbox
        //         {...field}
        //         {...props}
        //     >
        //         <S.CheckBox
        //                         isValid={meta.touched && !meta.error}
        //                         isInvalid={meta.touched && !!meta.error}
        //                         type='checkbox'
        //                         value={meta.value}
        //         />
        //         <Form.Check.Label>Eu li os Termos de Serviço e as Políticas de Privacidade</Form.Check.Label>
        //     </S.StyledCheckbox>
        // </>
        <>
            <input
                {...field}
                {...props}
                type='checkbox'
            />
        </>
    )
}