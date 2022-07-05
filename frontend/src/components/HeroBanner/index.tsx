import ButonCheio from '../ButonCheio';
import ButonBorda from '../ButtonBorda';
import * as S from './styles';


const HeroBanner: React.FC = () => {
    return (
        <S.HeroContainer>
            <S.HeroTextContainer>
                <h1>Renove os materiais escolares de seu filho e economize!</h1>
                <h3>Compre barato! Venda rápido! Troque por uma novidade!</h3>
                <ButonBorda typeButton='button' text='Começar' />
            </S.HeroTextContainer>
            <S.HeroImageContainer />
        </S.HeroContainer>
    )

}

export default HeroBanner;