
import SectionMain from '../../components/SectionMain';
import { Footer } from '../../components/Footer';
import Header from '../../components/Header';
import HeroBanner from '../../components/HeroBanner';
import ProdutosCarrossel from '../../components/ProdutosCarrossel';
import Vantagens from '../../components/Vantagens';
import CardAvaliacao from '../../components/CardAvaliacao';

const comentarios = [
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

const Home = () => {
  return (
    <>
        <HeroBanner />
        <SectionMain>
          <h2 className='section-title'>Encontre seu Material</h2>
          <ProdutosCarrossel />
          <a href='#'>Veja todos os itens</a>
        </SectionMain>
        <SectionMain>
          <h2 className='section-title'>Anúncios Recentes</h2>
          <ProdutosCarrossel />
          <a href='#'>Veja todos os itens</a>
        </SectionMain>
        <Vantagens />
        <SectionMain>
          <h2 className='section-title'>O que as pessoas estão comentando:</h2>
          <div style={{display: 'flex', flexFlow: 'row nowrap', justifyContent: 'space-between', gap: '5'}}>
            <CardAvaliacao nome={comentarios[0].nome} titulo={comentarios[0].titulo} comentario={comentarios[0].comentario}/>
            <CardAvaliacao nome={comentarios[1].nome} titulo={comentarios[1].titulo} comentario={comentarios[1].comentario}/>
            <CardAvaliacao nome={comentarios[2].nome} titulo={comentarios[2].titulo} comentario={comentarios[2].comentario}/>
            <CardAvaliacao nome={comentarios[3].nome} titulo={comentarios[3].titulo} comentario={comentarios[3].comentario}/>
          </div>
        </SectionMain>
    </>
  )
}

export default Home;