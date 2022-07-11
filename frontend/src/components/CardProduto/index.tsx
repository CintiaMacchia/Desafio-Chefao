import * as S from './styles'
import mochilaImg from '../../components/assets/images/mochila.png';
import FavoriteIcon from './IconeFavorito';

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
                <S.ImageContainer src={mochilaImg}/>
                <S.DescriptionContainer className='product'>
                    <h4 className='product__title'>{props.titulo}</h4>
                    <h5 className='product__condition'>{`Produto: ${props.estado}`}</h5>
                    <h3 className='product__price'>{`R$ ${props.valor}`}</h3>
                </S.DescriptionContainer>
            </S.StyledContainer>
        </S.StyledBody>
    )
}

export default CardProduto