import LogoBlack from '../assets/images/logo-black.png'
import { Col, Form, Row } from 'react-bootstrap';
import { FaTwitter } from 'react-icons/fa';
import { GrFacebookOption } from 'react-icons/gr';
import { AiFillInstagram } from 'react-icons/ai';
import ButonBorda from '../ButtonBorda';
import './styles.css';

export function Footer() {
  return (
    <footer>
      <div className="container-lg">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-4">
                <div className="company-info__container">
                  <div>
                    <img className='logo-black' src={LogoBlack} alt="" />
                  </div>
                  {/* div contatos */}
                  <div className="mt-3 ">
                    <div>
                      <a href="#" ></a>
                    </div>
                    <div className='d-flex flex-column company-info'>
                      <h5 className='company-info__text'><span className='company-info__title'>CNPJ:</span>XX. XXX. XXX/0001-XX</h5>
                      <h5 className='company-info__text'><span className='company-info__title'>Endereço:</span> Rua XXXXX, numero XX, Bairro: XXXX, CEP: 0XXXX-XX0</h5>
                      <h5 className='company-info__text'><span className='company-info__title'>Telefone:</span> +55 (XX) XXXX-XXXX</h5> 
                    </div>
                    <div className="mt-3">
                      <a className='company-info__email' href="http://Mailto:#">atendimento@passorepasso.com.br</a>
                    </div>
                    <div>
                      <div className='  mt-2 '>
                        <strong>Redes Sociais:</strong>
                        <div className='mt-2 mb-3'>
                          <a
                            href="https://www.facebook.com/">
                            <GrFacebookOption size={24} color="#6866cc" />
                          </a>
                          <a className="h-20 m-3"
                            href="https://www.instagram.com">
                            <AiFillInstagram size={24} color="#9c6361" />
                          </a>
                          <a 
                            href="https://twitter.com">
                            <FaTwitter size={24} color="#3a87a1" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-8 mt-4">
                <div className="row">
                  <div className="col-md-4">
                    <div className="col-md-4 categoria ">
                      <strong>Categorias</strong>
                      <div className="mt-2 ">
                        <div className='mt-3'>
                        <a className='undeline '
                          id='listasDeCompra '
                          href="#"> Todas as categorias
                        </a>
                        </div>
                        <div className='mt-2'>
                        <a 
                          id=' '
                          href="#"> Lancheiras
                        </a>
                        </div>
                        <div className='mt-2'>
                        <a 
                          id=' '
                          href="#">Lancheiras
                        </a>
                        </div>
                        <div className='mt-2'>
                        <a 
                          id=' '
                          href="#"> Livros
                        </a>
                        </div>
                        <div className='mt-2'>
                        <a 
                          id=' '
                          href="#"> Mochilas
                        </a>
                        </div>
                        <div className='mt-2'>
                        <a 
                          id=' '
                          href="#">Papelaria
                        </a>
                        </div>
                        <div className='mt-2'>
                        </div>
                        <div className='mt-2'>
                        <a className='mt-2 '
                          id=' '
                          href="#">Uniformes
                        </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6">
                        <strong>Menu</strong>
                        <div className="mt-2">
                          <a className='undeline '
                            href="#">Minha Conta</a>
                        </div>
                        <div className="mt-2">
                          <a className='undeline '
                            href="#">Favoritos</a>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <strong className="bold">Links</strong>
                        <div className="mt-2">
                          <a className='undeline '
                            href="#">Política de Privacidade
                          </a>
                        </div>
                        <div className="mt-2">
                          <a className='underline'
                            href="#">Termos de Serviço</a>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <Form className="mt-5 ">
                          <Form.Group as={Row} controlId="formPlaintextPassword">      
                          <Col className='imput-email' sm="10">
                            <Form.Control type="email" placeholder="Email" />
                          </Col>
                            <Col sm="1" >
                            <ButonBorda typeButton="submit" text={"Assinar"} />
                            </Col>
                          </Form.Group>
                        </Form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-container">
          <span className='copy'>
            © PassoRepasso - Todos os direitos reservados
          </span>
        </div>
      </div>
    </footer>
  );
};





