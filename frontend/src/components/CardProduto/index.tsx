import * as S from './styles'
import mochilaImg from '../../components/assets/images/mochila.png';
import FavoriteIcon from '../Favoritos';

interface CardProdutoProps {
    nome: string,
    estado: string,
    preco: string
}

const CardProduto = (props:CardProdutoProps) => {
    return (
            <S.StyledContainer>
                <FavoriteIcon className='icon'/>
                <S.ImageContainer src={mochilaImg}/>
                <S.DescriptionContainer>
                    <h4>{props.nome}</h4>
                    <span>{`Produto: ${props.estado}`}</span>
                    <h5>{`R$ ${props.preco}`}</h5>
                </S.DescriptionContainer>
            </S.StyledContainer>
    )
}

export default CardProduto