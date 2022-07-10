import * as S from './styles';
import PorquinhoIcon from '../assets/images/porquinho.png';
import TrocaIcon from '../assets/images/troca.png';
import SorrisoIcon from '../assets/images/sorriso.png';
import ColaborarIcon from '../assets/images/colaborar.png';

const Vantagens: React.FC = () => {
    return (
        <S.VantagensContainer>
            <div>
            <S.SectionTitle>Por que usar a plataforma?</S.SectionTitle>
            </div>
            <S.CardsContainer className='advantage__container'>
                <S.VantagensCard>
                    <img className='advantage__icon' src={PorquinhoIcon} alt='Porquinho cofre'/>
                    <h3 className='advantage__title'>Economia</h3>
                    <h4 className='advantage__text'>Não precisa comprar tudo novo e com preços altos.</h4>
                </S.VantagensCard>
                <S.VantagensCard>
                    <img className='advantage__icon' src={TrocaIcon} alt='Troca de camisetas'/>
                    <h3 className='advantage__title'>Renovação</h3>
                    <h4 className='advantage__text'>Crianças gostam de novidades.</h4>
                </S.VantagensCard>
                <S.VantagensCard>
                    <img className='advantage__icon' src={SorrisoIcon} alt='Rosto tranquilo'/>
                    <h3 className='advantage__title'>Tranquilidade</h3>
                    <h4 className='advantage__text'>Não precisa sair de loja em loja, faça seu orçamento por aqui.</h4>
                </S.VantagensCard>
                <S.VantagensCard>
                    <img className='advantage__icon' src={ColaborarIcon} alt='Colaboração'/>
                    <h3 className='advantage__title'>Colaboração</h3>
                    <h4 className='advantage__text'>Todos os semestres os pais procuram kits, nós criamos uma comunidade.</h4>
                </S.VantagensCard>
            </S.CardsContainer>
        </S.VantagensContainer>
    )
}

export default Vantagens;