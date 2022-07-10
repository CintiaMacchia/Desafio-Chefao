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
        <>
            <S.CheckBox
                {...field}
                {...props}
                isValid={meta.touched && !!meta.error}
                isInvalid={meta.touched && !!meta.error}
            />
        </>
    )
}