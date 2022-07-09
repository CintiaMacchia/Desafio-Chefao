import React from 'react';
import Container from '../../components/Container';
import { Footer } from '../../components/Footer';

import Mochila2 from '../../components/assets/images/images-details/MochilaBatmanSmall2.png';
import Mochila3 from '../../components/assets/images/images-details/MochilaBatmanSmall3.png';
import Mochila1 from '../../components/assets/images/images-details/MochilaBatmanSmall1.png';
import Mochila from '../../components/assets/images/images-details/MochilaBatman.png';


import Header from '../../components/Header';
import ProdutosCarrossel from '../../components/ProdutosCarrossel';
import ButtonBorda from '../../components/ButtonBorda';
import { AiOutlineHeart } from 'react-icons/ai';

const ProdutosDetail: React.FC = () => {
  return (
      <Container>
          <Header />

          <div className="container-fluid">
  <div className="row">
    <div className="col-md-2">
      <div className="row">
        <div className="col-md-12">
        <Mochila1/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
        <Mochila2/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
        <Mochila3/>
        </div>
      </div>
    </div>
    <div className="col-md-4">
    <Mochila/>
    </div>
    <div className="col-md-6">
      <div className="row">
        <div className="col-md-12">
<p>Categoria : Mochila / Estado : SP</p>
<p>Mochila do Batman</p>
<span>Mochila do Batman</span>
<p>Produto: Semi-novo</p>
        <p>Cidade : São Paulo</p>
        <p>Mochila com tema do Batman sem rasgos e com poucos meses de uso. Envio por correio ou para retirada em São Paulo.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <ButtonBorda
          text='contacto'
          
          />
          <div><AiOutlineHeart/></div>
        </div>
      </div>
    </div>
  </div>
</div>




          <div className="container-fluid">
  <div className="row">
    <div className="col-md-2">
      <div className="row">
        <div className="col-md-12">


        </div>
      </div>
      <div className="row">
       
        </div> <div className="col-md-12">
        <Mochila2/>
      </div>
      <div className="row">
        <div className="col-md-12">
     
        </div>
      </div>
    </div>
    <div className="col-md-4">

    </div>
    <div className="col-md-6">
      <div className="row">
        <div className="col-md-12"></div>
      </div>
      <div className="row">
        <div className="col-md-12"></div>
      </div>
    </div>
  </div>
</div>

          <ProdutosCarrossel />
          <Footer />
      </Container>
  );
}

export default ProdutosDetail;