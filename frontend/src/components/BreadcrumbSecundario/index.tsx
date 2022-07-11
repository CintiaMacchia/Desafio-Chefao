
import * as S from './styles';

interface BreadcrumbSecundarioProps {
    textOptinal?: string
    text: string

}

const BreadcrumbSecundario = (props: BreadcrumbSecundarioProps) => {
    return (
        <>
            <S.StyledBar2>
                <S.StyledText >
                    <span  >{props.textOptinal}
                    </span>
                    <span >{props.text}
                    </span>
                </S.StyledText>
            </S.StyledBar2>
        </>

    )
}

export default BreadcrumbSecundario;