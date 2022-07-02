import { ReactNode } from 'react';
import  * as S from './styles';

const ContainerPerfilUsuario = ({children}:{children:ReactNode}) => {
  return (
    <S.StyledContainer>
        {children}
    </S.StyledContainer>
  )
}

export default ContainerPerfilUsuario;