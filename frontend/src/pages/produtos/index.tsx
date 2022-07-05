import React from 'react';
import Container from '../../components/Container';
import ContentList from '../../components/ContentList';
import { Footer } from '../../components/Footer';

import Header from '../../components/Header';

const Produtos: React.FC = () => (
    <Container>
        <Header />
        <ContentList />
        <Footer />
    </Container>
)

export default Produtos;