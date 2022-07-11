import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Container from '../../components/Container';
import ContentList from '../../components/ContentList';
import { Footer } from '../../components/Footer';
import Comtiner  from '../../components/Container';

import Header from '../../components/Header';
import Breadcrumbs from '../../components/Breadcrumbs';
import BreadcrumbSecundario from '../../components/BreadcrumbSecundario';


const Produtos: React.FC = () => { 
    const categoria:string ="Mochila"
    return (
    <>
        <Header />
        <Breadcrumbs
            firstPage='Resultados da Pesquisa'
        />
        <BreadcrumbSecundario text={categoria} />
        <ContentList />
        <div className="d-flex justify-content-center mt-5 mb-5"><IoIosArrowBack/><span> Página 1 de 3</span><IoIosArrowForward/></div> 
        <Footer />
    </>
)
    }


export default Produtos;