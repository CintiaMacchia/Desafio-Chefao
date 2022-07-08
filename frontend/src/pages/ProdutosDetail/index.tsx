import React from 'react';
import Container from '../../components/Container';
import { Footer } from '../../components/Footer';

import Header from '../../components/Header';
import ProdutosCarrossel from '../../components/ProdutosCarrossel';

const ProdutosDetail: React.FC = () => {
  return (
      <Container>
          <Header />
          <ProdutosCarrossel />
          <Footer />
      </Container>
  );
}

export default ProdutosDetail;