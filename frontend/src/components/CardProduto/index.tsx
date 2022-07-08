import * as S from './styles'
import mochilaImg from '../../components/assets/images/mochila.png';
import FavoriteIcon from '../Favoritos';

interface CardProdutoProps {
    titulo: string,
    estado?: string,
    foto?: string
    valor: string
    categoria?: string
    texto?: string
}

const CardProduto = (props:CardProdutoProps) => {
    return (
        <S.StyledBody>
            <S.StyledContainer>
                <FavoriteIcon className='icon'/>
                <S.ImageContainer src={props.foto}/>
                <S.DescriptionContainer>

                    <h4>{props.titulo}</h4>
                    <span>{`categoria: ${props.categoria}`}</span>
                    <span>{`estado: ${props.estado}`}</span>
                    <h5>{`R$ ${props.valor}`}</h5>
                </S.DescriptionContainer>
            </S.StyledContainer>
        </S.StyledBody>
    )
}

export default CardProduto