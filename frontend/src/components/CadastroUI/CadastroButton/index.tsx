import { FormikValues } from 'formik';
import * as S from './styles';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

interface CadastroButtonProps {
    isLastStep: boolean
}

const CadastroButton: React.FC<CadastroButtonProps> = (props) => {
    return (
        <>
            <S.StyledButtonOrange type='submit'>{props.isLastStep ? 'Cadastrar' : 'Continuar '}</S.StyledButtonOrange>
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
        {props.hasPrevious && <a onClick={props.onBackClick}><BsChevronLeft size={30} style={{cursor: 'pointer'}}/> </a>}
    </>
    )
}

export default CadastroButton;