

import { FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import './styles.css';











import logo from '../../components/assets/images/logo.png';
import { Button, Col, Form, Row } from 'react-bootstrap';
export function Footer() {
  return (
    <footer className="bg-black text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="jumbotron">
              <div className="mt-5">
                <img src={logo} alt="" />
              </div>
              {/* div contatos */}
              <div className="mt-5  ">
                <div>
                  <a href="#" className="undeline  underlinMais "></a>
                </div>
                <div>
                  <a href="#"> CNPJ</a>
                </div>
                <div>
                  <a href="#" className="undeline underlinMais">
                    Endereço</a>
                </div>

                <a className="text-decoration-none text-white undeline  underlinMais " href="tel:1195655252">   Telefone</a>
                <div className="mt-3 text-light">
                  <a className="text-decoration-none text-white undeline  underlinMais "
                    href="http://Mailto:#">atendimento@empresa.com.br</a>
                </div>
                <div>

                </div>
              </div>

            </div>
            <div className='flex  mt-4 '>
              <strong>Redes Sociais:</strong>
              <div className='mt-2 mb-5'>
                <a
                  href="https://www.facebook.com/">
                  <GrFacebookOption size={24} color="#6866cc" />
                </a>
                <a className="h-20 m-3"
                  href="https://www.instagram.com">
                  <AiFillInstagram size={24} color="#9c6361" />
                </a>

                <a className='mb-'
                  href="https://twitter.com">
                  <FaTwitter size={24} color="#3a87a1" />
                </a>
              </div>

            </div>
          </div>
          <div className="col-md-8">

            <Form className="mt-5 ">


              <Form.Group as={Row} className="mb-3 " controlId="formPlaintextPassword">
                <Col className='imput-email' sm="10">
                  <Form.Control type="email" placeholder="Email" />
                 
                </Col>
                <Col sm="1" >
                  <Button as="input" type="submit" value="Assinar" variant="warning" className='buton-enviar row' />
                </Col>
              </Form.Group>
            </Form>

            <div className="row p-3 ">
              <div className="col-md-4 categoria ">
                <strong>Categorias</strong>
                <div className="mt-2">
                  <a className='undeline  underlinMais '

                    href="#"> Materiais
                  </a>
                </div>

                <div className="mt-2">
                  <a className='undeline  underlinMais '
                    href="#">Listas de Compra
                  </a>
                </div>
              </div>

              <div className="col-md-4">
                <strong>Menu</strong>
                <div className="mt-2">
                  <a className='undeline  underlinMais '
                    href="#">Minha Conta</a>
                </div>
                <div className="mt-2">
                  <a className='undeline  underlinMais '
                    href="#">Favoritos</a>
                </div>
              </div>

              <div className="col-md-4">
                <strong className="bold">Links</strong>
                <div className="mt-2">
                  <a className='undeline  underlinMais '
                    href="#">Política de Privacidade
                  </a>
                </div>
                <div className="mt-2">

                  <a className='undeline  underlinMais '
                    href="#">Termos de Serviço</a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <span className='copy '>
          © Empresa - Todos os direitos reservados
        </span>
      </div>

    </footer>

  );
};





