import React, { useState } from "react";
import Container from "../../components/Container";
import { Footer } from "../../components/Footer";

import Mochila2 from "../../components/assets/images/images-details/MochilaBatmanSmall2.png";
import Mochila3 from "../../components/assets/images/images-details/MochilaBatmanSmall3.png";
import Mochila1 from "../../components/assets/images/images-details/MochilaBatmanSmall1.png";
import Mochila from "../../components/assets/images/images-details/MochilaBatman.png";

import Header from "../../components/Header";
import ProdutosCarrossel from "../../components/ProdutosCarrossel";
import ButtonBorda from "../../components/ButtonBorda";
import { AiOutlineHeart } from "react-icons/ai";


import "./style.css";
import { Carousel } from "react-bootstrap";
const ProdutosDetail: React.FC = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: React.SetStateAction<number>, e: any) => {
    setIndex(selectedIndex);
  };
  ;
  return (
    <>
      <Header />
      <section className="container-fluid mt-5 mb-5 ">
        <div className="row">
          <div className="d-flex justify-content-center">
            <div className="">
              <div className="row">
                <div className="p-1 m-1">
                  <img className="img-Preview " src={Mochila1} alt="logo" title="" />
                </div>
              </div>
              <div className="row">
                <div className=" p-1 m-1">
                  <img className="img-Preview " src={Mochila2} alt="logo" title="" />
                </div>
              </div>
              <div className="row">
                <div className=" p-1 ">
                  <img className="img-Preview " src={Mochila} alt="Mochila-Batman" title="MochilaBatman" />
                </div>
              </div>
            </div>

            <div className="img-Produto-principal">

              <Carousel activeIndex={index} variant="dark" interval={null}  onSelect={handleSelect}>
                <Carousel.Item>
                  <img
                    className="d-block position-relative"
                    src={Mochila}
                    alt="First slide"
                  />

                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block positon-relative "
                    src={Mochila2}
                    alt="Second slide"
                  />

                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block position-relative"
                    src={Mochila1}
                    alt="Third slide"
                  />

                </Carousel.Item>
              </Carousel>


            </div>
            <div className="w-25">
              <div className="">
                <div className=" mt-4 ">
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

                    <ButtonBorda text="contacto" />
                    <div className="p-1 px-3 mx-2 border faboritar-button ">
                      <AiOutlineHeart className="" />
                    </div>

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


      <div className="d-flex justify-content-center fs-1 pt-5 w-100 buttton-mais-items" >
        <ButtonBorda text="Veja todos os itens" />
      </div>

      <Footer />
    </>
  );
};

export default ProdutosDetail;
