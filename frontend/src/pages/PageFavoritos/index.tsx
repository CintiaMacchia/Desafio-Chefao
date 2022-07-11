import React from 'react';

import ContentList from '../../components/ContentList';
import { Footer } from '../../components/Footer';
import Header from '../../components/Header';
import Breadcrumbs from '../../components/Breadcrumbs';
import BreadcrumbSecundario from'../../components/BreadcrumbSecundario';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';




const PageFavoritos: React.FC = () => { 
    const categoria:string ="Favoritos"
    return (
    <>
        <Header />
        <Breadcrumbs
            firstPage='Favoritos'
        />
        <BreadcrumbSecundario text={categoria} />
        <ContentList />
        
        <div className="d-flex justify-content-center mt-5 mb-5"><IoIosArrowBack/><span> Página 1 de 3</span><IoIosArrowForward/></div> 
        <Footer />
    </>
)
    }
export default PageFavoritos;