
import logo from '../../components/assets/images/logo.png';
import { FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import './styles.css';












import { Button, Col, Form, Row } from 'react-bootstrap';
import ButonCheio from '../ButonCheio';
import ButonBorda from '../ButtonBorda';
export function Footer() {
  return (
    <footer >

      <div className="container-lg">
        <div className="row">
          <div className="col-md-12">

            <div className="row">
              <div className="col-md-4">

                <div className="jumbotron">
                  <div className="mt-3">
                    <img src={logo} alt="" />
                  </div>
                  {/* div contatos */}
                  <div className="mt-3 ">
                    <div>
                      <a href="#" className="text-dark"></a>
                    </div>
                    <div>
                      <a className="text-dark" href="#"> CNPJ: XX. XXX. XXX/0001-XX  <br />Endereço: Rua XXXXX, numero XX, <br /> Bairro XXXX, Cep: 0XXXX-X0  </a>
                    </div>


                    <a className="text-decoration-none text-white undeline  underlinMais " href="tel:000000002">  Telefone: +55 (XX) XXXX-XXXX</a>
                    <div className="mt-3 text-light">
                      <a className="text-decoration-none text-white undeline  underlinMais "
                        href="http://Mailto:#">atendimento@empresa.com.br</a>
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
                        <a className='undeline '
                          id=' '
                          href="#"> Lancheiras
                        </a>
                        </div>
                        <div className='mt-2'>
                        <a className='undeline '
                          id=' '
                          href="#">Lancheiras
                        </a>
                        </div>
                        <div className='mt-2'>
                        <a className='undeline '
                          id=' '
                          href="#"> Livros
                        </a>
                        </div>
                        <div className='mt-2'>
                        <a className='undeline '
                          id=' '
                          href="#"> Mochilas
                        </a>
                        </div>
                        <div className='mt-2'>
                        <a className='undeline '
                          id=' '
                          href="#">Papelaria
                        </a>
                        </div>
                        <div className='mt-2'>

                        </div>
                        <div className='mt-2'>
                        <a className='underline mt-2 '
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

                          <a className='undeline  '
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
                            <ButonBorda   typeButton="submit" text={"Assinar"} />
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

        <div className="container-lg ">
          <span className='copy '>
            © Empresa - Todos os direitos reservados
          </span>
        </div>
      </div>

    </footer>

  );
};





