import SectionMain from '../../components/SectionMain';
import { Footer } from '../../components/Footer';
import Header from '../../components/Header';
import HeroBanner from '../../components/HeroBanner';
import ProdutosCarrossel, { ProdutosCarrosselRecentes } from '../../components/ProdutosCarrossel';
import Vantagens from '../../components/Vantagens';
import AvaliacaoContainer from '../../components/AvaliacoesUI/AvaliacoesContainer';



const Home = () => {
  return (
    <>
    <Header/>  
        <HeroBanner />
        <SectionMain>
          <h2 className='section-title'>Encontre seu Material</h2>
          <ProdutosCarrossel />
          <a className='button-orange' href='/produtos'>Veja todos os itens</a>
        </SectionMain>
        <SectionMain>
          <h2 className='section-title'>Anúncios Recentes</h2>
          <ProdutosCarrosselRecentes />
          <a className='button-orange' href='/produtos'>Veja todos os itens</a>
        </SectionMain>
        <Vantagens />
        <SectionMain>
          <h2 className='section-title'>O que as pessoas estão comentando:</h2>
          <AvaliacaoContainer />
        </SectionMain>
        
<Footer/>
    </>
  )
}

export default Home;