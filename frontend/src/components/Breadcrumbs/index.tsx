import * as S from './styles';

interface BreadcrumbsProps {
    firstPage: string
}

const Breadcrumbs = (props:BreadcrumbsProps) => {
    return (
        <S.StyledBar>
            <S.StyledText>
                <p className='breadcrumb'>{`Pagina Principal > `}
                    <span className='highlight'>{`${props.firstPage}`}</span>
                </p>
            </S.StyledText>
        </S.StyledBar>
    )
}

export default Breadcrumbs;