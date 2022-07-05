import * as S from './styles';
import DoubleQuoteIcon from '../assets/images/double-quote.svg';
import Stars from '../assets/images/stars.svg';

interface CardAvaliacaoProps {
    titulo: string,
    comentario: string,
    nome: string
}

const CardAvaliacao = (props:CardAvaliacaoProps) => {
    return (
        <S.CardContainer>
            <img src={DoubleQuoteIcon} />
            <h2 className='titulo-comentario'>{props.titulo}</h2>
            <img src={Stars} />
            <p>{props.comentario}</p>
            <hr />
            <h3>{props.nome}</h3>
        </S.CardContainer>
    )
}

export default CardAvaliacao;