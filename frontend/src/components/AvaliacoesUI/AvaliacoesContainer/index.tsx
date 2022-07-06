import * as S from './styles';
import CardAvaliacao from '../CardAvaliacao';

const avaliacoes = [
    {
        nome: 'Simone V.',
        titulo: 'Muito útil !',
        comentario: 'Não sei como não fizeram essa plataforma antes.'
    },
    {
        nome: 'Marcos T.',
        titulo: 'Economizei !',
        comentario: 'Pude economizar e comprar o que meu filho precisava.'
    },
    {
        nome: 'Luiza M.',
        titulo: 'Todos estão falando',
        comentario: 'Sempre comento e vejos as pessoas falando daqui.'
    },
    {
        nome: 'Adriana P.',
        titulo: 'Adorei as listas',
        comentario: 'Vendi mais do que eu pretendia pra uma pessoa'
    },
];

const AvaliacaoContainer: React.FC = () => {
    
    return (
        <S.StyledContainer>
            {avaliacoes.map((values, index) => (
                <CardAvaliacao nome={avaliacoes[index].nome} titulo={avaliacoes[index].titulo} comentario={avaliacoes[index].comentario} />
            ))}
        </S.StyledContainer>
    )

}

export default AvaliacaoContainer;