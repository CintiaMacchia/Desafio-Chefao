import * as S from './styles';
import PorquinhoIcon from '../assets/images/porquinho.svg';
import TrocaIcon from '../assets/images/troca.svg';
import SorrisoIcon from '../assets/images/sorriso.svg';
import ColaborarIcon from '../assets/images/colaborar.svg';

const Vantagens: React.FC = () => {
    return (
        <S.VantagensContainer>
            <div>
            <S.SectionTitle>Por que usar a plataforma?</S.SectionTitle>
            </div>
            <S.CardsContainer>
                <S.VantagensCard>
                    <img src={PorquinhoIcon} alt='Porquinho cofre'/>
                    <h3>Economia</h3>
                    <h4>Não precisa comprar tudo novo e com preços altos.</h4>
                </S.VantagensCard>
                <S.VantagensCard>
                    <img src={TrocaIcon} alt='Troca de camisetas'/>
                    <h3>Renovação</h3>
                    <h4>Crianças gostam de novidades.</h4>
                </S.VantagensCard>
                <S.VantagensCard>
                    <img src={SorrisoIcon} alt='Rosto tranquilo'/>
                    <h3>Tranquilidade</h3>
                    <h4>Não precisa sair de loja em loja, faça seu orçamento por aqui.</h4>
                </S.VantagensCard>
                <S.VantagensCard>
                    <img src={ColaborarIcon} alt='Colaboração'/>
                    <h3>Colaboração</h3>
                    <h4>Todos os semestres os pais procuram kits, nós criamos uma comunidade.</h4>
                </S.VantagensCard>
            </S.CardsContainer>
        </S.VantagensContainer>
    )
}

export default Vantagens;