import React from 'react';
import ButonBorda from '../ButtonBorda';
import * as S from "./styles"


const SectionMain = ({children}:{children: React.ReactNode}) => {
    return (
        <S.Container>
            {children}
        </S.Container>
    )
}

export default SectionMain;