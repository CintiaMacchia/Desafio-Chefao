import * as S from './styles';
import CardAvaliacao from '../CardAvaliacao';

const avaliacoes = [
    {
        id: 0,
        nome: 'Simone V.',
        titulo: 'Muito útil !',
        comentario: 'Não sei como não fizeram essa plataforma antes.'
    },
    {
        id: 1,
        nome: 'Marcos T.',
        titulo: 'Economizei !',
        comentario: 'Pude economizar e comprar o que meu filho...'
    },
    {
        id: 2,
        nome: 'Luiza M.',
        titulo: 'Todos estão falando',
        comentario: 'Sempre comento e vejos as pessoas falando daqui.'
    },
    {
        id: 3,
        nome: 'Adriana P.',
        titulo: 'Adorei as listas',
        comentario: 'Vendi mais do que eu pretendia pra uma pessoa'
    },
];

const AvaliacaoContainer: React.FC = () => {
    
    return (
        <S.StyledContainer>
            {avaliacoes.map((values, index) => (
                <CardAvaliacao key={avaliacoes[index].id} nome={avaliacoes[index].nome} titulo={avaliacoes[index].titulo} comentario={avaliacoes[index].comentario} />
            ))}
        </S.StyledContainer>
    )

}

export default AvaliacaoContainer;