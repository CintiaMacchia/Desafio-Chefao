import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import Container from '../../components/Container';
import ContentList from '../../components/Produtos';
import { Footer } from '../../components/Footer';
import Comtiner  from '../../components/Container';

import Header from '../../components/Header';

const Produtos: React.FC = () => (
    <>
        <Header />
        <div className="container-fluid ">
            <div className="container-lg p-2 align-content-center">
                <div className="row">
                    <div className="col-md-12"></div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-12 p-2 ">
                            <a className="text-black-50" href="/">  Página Principal <IoIosArrowForward /></a>
                            <a className="text-dark" href="/anunciar">  Anunciar</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        <div className="container-fluid ">
        <div className="container-lg p-3 pe-5">
                <div className="row">
                    <div className="col-md-12"></div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-12 mt-3">
                         
                            <p className="text-dark" > Resultados da Pesquisa: Mochila</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        <ContentList />
        <Footer />
    </>
)

export default Produtos;