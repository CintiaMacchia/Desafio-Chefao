import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import Container from '../../components/Container';
import ContentList from '../../components/ResultadoPesquisa';
import { Footer } from '../../components/Footer';

import Header from '../../components/Header';

const Produtos: React.FC = () => (
    <>
        <Header />
        <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-12"></div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-12 mt-3">
                            <a className="text-black-50" href="/">  Página Principal <IoIosArrowForward /></a>
                            <a className="text-dark" href="/anunciar">  Anunciar</a>
                        </div>
                    </div>
                </div>
            </div>
        <ContentList />
        <Footer />
    </>
)

export default Produtos;