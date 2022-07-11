import LogoBlack from '../assets/images/logo-black.png'
import { FaTwitter } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import { AiFillInstagram } from 'react-icons/ai';
import * as S from './styles'

export function Footer() {
  return (
  <>
    <S.StyledFooter>
      <S.FirstHalfContainer>
        <S.FooterInfoContainer>
          <div>
            <img className='logo-black' src={LogoBlack} alt="" />
          </div>
          <S.CompanyInfoContainer>
            <h5 className='company-info__text'><span className='company-info__title'>CNPJ:</span> XX. XXX. XXX/0001-XX</h5>
            <h5 className='company-info__text'><span className='company-info__title'>Endereço:</span> Rua XXXXX, numero XX, Bairro: XXXX, CEP: 0XXXX-XX0</h5>
            <h5 className='company-info__text'><span className='company-info__title'>Telefone:</span> +55 (XX) XXXX-XXXX</h5>
            <h5 className='company-info__email'>atendimento@passorepasso.com.br</h5>
          </S.CompanyInfoContainer>
          <S.SocialMediaContainer>
            <h5 className='footer__title footer__title-social'>Rede Sociais:</h5>
            <div className='company-info__social-icons-container'>
              <GrFacebookOption size={20} color='#2F80ED' className='company-info__social-icons'/>
              <AiFillInstagram size={20} className='company-info__social-icons'/>
              <FaTwitter size={20} color='#56CCF2' className='company-info__social-icons'/>
            </div>
            <S.StyledCopyright>© PassoRepasso - Todos os direitos reservados</S.StyledCopyright>
          </S.SocialMediaContainer>
        </S.FooterInfoContainer>

        <S.FooterMenuContainer>
          <h5 className='footer__title'>Categorias</h5>
          <a className='footer__link'>Todas as Categorias</a>
          <a className='footer__link'>Lancheiras</a>
          <a className='footer__link'>Listas Escolares</a>
          <a className='footer__link'>Livros</a>
          <a className='footer__link'>Mochilas</a>
          <a className='footer__link'>Papelaria</a>
          <a className='footer__link'>Uniformes</a>
        </S.FooterMenuContainer>

      </S.FirstHalfContainer>

      <S.SecondHalfContainer>
        <S.FooterMenuContainer>
          <h5 className='footer__title'>Menu</h5>
          <a className='footer__link' href='/perfil'>Minha Conta</a>
          <a className='footer__link' href='/favoritos'>Favoritos</a>
          <a className='footer__link'>Chat</a>
        </S.FooterMenuContainer>

        <S.FooterMenuContainer style={{paddingLeft: '2.938rem'}}>
          <h5 className='footer__title'>Links</h5>
          <a className='footer__link'>Política de Privacidade</a>
          <a className='footer__link'>Termos de Serviço</a>
        </S.FooterMenuContainer>

        <S.FooterMailingContainer>
            <label className='mailing-list__label'>Assine nosso informativo mensal</label>
            <form>
              <input type='text' placeholder='E-mail' className='input-mail'/>
              <button type='submit' className='button-mail-list'>Assinar</button>
            </form>
        </S.FooterMailingContainer>

      </S.SecondHalfContainer>
    </S.StyledFooter>
  </>
  );
};





