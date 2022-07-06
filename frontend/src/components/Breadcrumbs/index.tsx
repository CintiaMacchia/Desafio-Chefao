import * as S from './styles';

interface BreadcrumbsProps {
    firstPage: string,
    secondPage?: string
}

const Breadcrumbs = (props:BreadcrumbsProps) => {
    return (
        <S.StyledBar>
            <S.StyledText>
                <p>{`Pagina Principal > `}
                    <span className={!props.secondPage ? 'highlight' : ''}>{`${props.firstPage} >`}</span>
                    <span className={props.secondPage && 'highlight'}>{props.secondPage && ` ${props.secondPage}`}</span>
                </p>
            </S.StyledText>
        </S.StyledBar>
    )
}

export default Breadcrumbs;