import { FormikValues } from 'formik';
import * as S from './styles';

interface CadastroButtonProps {
    isLastStep: boolean
}

const CadastroButton: React.FC<CadastroButtonProps> = (props) => {
    return (
        <>
            <S.StyledButtonOrange type='submit'>{props.isLastStep ? 'Cadastrar' : 'Continuar'}</S.StyledButtonOrange>
        </>
    )
}

interface BackButtonProps {
    hasPrevious?: boolean
    onBackClick: (values: FormikValues) => void;
}

export const BackButton: React.FC<BackButtonProps> = (props) => {
    return (
    <>
        {props.hasPrevious && <S.StyledButtonOrange onClick={props.onBackClick}>Back</S.StyledButtonOrange>}
    </>
    )
}

export default CadastroButton;