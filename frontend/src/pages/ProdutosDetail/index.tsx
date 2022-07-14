
import React from "react";
import ImageGallery from 'react-image-gallery';
import Menu from "../../components/Header";
import ButtonBorda from "../../components/ButtonBorda";
import ProdutosCarrossel from "../../components/ProdutosCarrossel";
import { Footer } from "../../components/Footer";
import Mochila1 from "../../components/assets/images/images-details/MochilaBatman.png";
import Mochila2 from "../../components/assets/images/images-details/MochilaBatman2.png";
import Mochila3 from "../../components/assets/images/images-details/MochilaBatman3.png";
import { AiOutlineHeart } from "react-icons/ai";

import "./style.css";
import "react-image-gallery/styles/css/image-gallery.css";

const ProdutosDetail: React.FC = () => {

  const images = [
    {
      original: Mochila1,
      thumbnail: Mochila1,
    },
    {
      original: Mochila2,
      thumbnail: Mochila2,
    },
    {
      original: Mochila3,
      thumbnail: Mochila3,
    },
  ];

return (
    <> 
      <Menu />
      <section className="container-fluid" style={{margin: '6.25rem 0'}}>
        <div className="row">
          <div className="d-flex justify-content-center">    
              <ImageGallery
                items={images} 
                thumbnailPosition='left'
                showBullets={false}
                showPlayButton={false}
                showNav={false}
                disableThumbnailScroll={true}
              />

            <div style={{width: '32rem', paddingLeft: '1.688rem'}}>
                <div>
                  <p>Categoria : Mochila / Estado : SP</p>

                  <span className=" fs-5">Mochila do Batman</span> <br />
                  <span className=" mb-2 fs-5">R$ 30,00</span>
                  <p>Produto: Semi-novo</p>
                  <p>Cidade : São Paulo</p>
                  <p>
                    Mochila com tema do Batman sem rasgos e com poucos meses de
                    uso. Envio por correio ou para retirada em São Paulo.
                  </p>
                  <div className="d-flex justify-content-start ">
                    <a href='/contato'><ButtonBorda text="Contato" /></a>
                    <div className="p-1 px-3 mx-2 border faboritar-button ">
                      <AiOutlineHeart className="" />
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>

      </section>
      <div className="d-flex justify-content-center fs-1 pt-5"><span>Produtos que você pode gostar</span></div>
      <div className="d-flex justify-content-center ">
        <ProdutosCarrossel />
      </div>


      <div className="d-flex justify-content-center fs-1 pt-5 w-100 buttton-mais-items" style={{marginBottom: '6.25rem'}} >
        <ButtonBorda text="Veja todos os itens" />
      </div>

      <Footer /> 
    </>
  );
};

export default ProdutosDetail;
