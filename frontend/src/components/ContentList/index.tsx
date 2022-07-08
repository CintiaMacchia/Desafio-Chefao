import React, { useEffect, useState } from 'react';
import Container from '../Container';
import {listarProdutos} from '../../services/MainApi/produtos';
import './styles.css';
import Selected from '../Selected';
import CardProduto from '../CardProduto';

interface Produto {
  id: string;
  titulo:string;
  estado: string;
   valor:string
   foto: string
  categoria: string
  descricao: string;

}

export default function ContentList() {
  const [listProdutos, setProdudos] = useState<Produto[]>([]);

  useEffect(() => {
    const getData = async() => {  
  try {
    const response = await listarProdutos();
    setProdudos(response.data);
  }catch (error) {
    alert('Erro ao carregar os produtos')
  }
};
  getData();

  }, [setProdudos]);
  
  return (
      <Container>
      <div className="container-fluid">
  <div className="row">
    <div className="col-md-2"></div>
    <div className="col-md-10">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-8">
          <Selected/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          
        <div className="grid-container">
            {listProdutos.map((produto)=>(
              <div className="grid-item" key={produto.id}>
                <div className="card-container">
                <CardProduto
                  titulo={produto.titulo}
                  categoria={produto.categoria}
                  estado={produto.estado}
                  valor={produto.valor}
             foto={produto.foto}
                /> 
                </div>
              </div>
            ))}
              
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 </Container>
 
         
  
  );
}

