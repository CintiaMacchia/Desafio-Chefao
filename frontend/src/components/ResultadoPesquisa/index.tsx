



import{ useEffect, useState } from 'react';
import Container from '../Container';
import {listarProdutos} from '../../services/MainApi/produtos';

import Selected from '../Selected';
import CardProduto from '../CardProduto';
import Mochila from '../../components/assets/images/mochila.png';
import './styles.css';
import { Sidebar } from '../Sidebar';


interface Produto {
  id: number;
  titulo:string;
  estado: string;
   valor:string;
   foto: string;
  categoria: string;
  // descricao: string;

}


export default function ResultadoPesqisa() {
//   const [produtos, setProdutos] = useState<Produto[]>([]);

//   useEffect(() => {
//     const getData = async() => {  
//   try {
//     const response = await listarProdutos();
//     setProdutos(response.data);
//   }catch (error) {
//      alert('Erro ao carregar os produtos')
//   }
// };
//   getData();
 

//   }, [setProdutos]);
  
  return (
    <main className="container-lg">

<div className="content-container">
  <div className="row">
    <div className="col-md-4 d-flex justify-content-around">
      <Sidebar/>
    </div>
    <div className="col-md-8">
      <div className="row">
        <div className="col-md-4">

<h6 className="mx-4">25 resultados</h6>

        </div>
        <div className="col-md-8">
          <div className="d-flex justify-content-end">
            <span>Organizar por </span>
            <div className="seleted">
            <Selected />
            </div>
          
          </div>
         
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          
        <div className="grid-container">
            {/* {produtos.map(produto=>( */}
              {/* <div className="grid-item" key={produto.id}> //para ativa depois */}
            
                <div className="card-container mt-4">
                 
                <CardProduto
                  
                  titulo={"pofifdvhfdiuhbid"}
                  categoria={"livro"}
                  estado={"usado"}
                  valor={"10$"}
             foto={Mochila}
                  />
                      </div>
                      {/* </div> */}
            {/* ))} */}
             
                <div className="card-container mt-4">
                 
                <CardProduto
                  
                  titulo={"pofifdvhfdiuhbid"}
                  categoria={"livro"}
                  estado={"usado"}
                  valor={"10$"}
             foto={Mochila}
                  />
                </div>
          
                <div className="card-container mt-4">
                 
                <CardProduto
                  
                  titulo={"pofifdvhfdiuhbid"}
                  categoria={"livro"}
                  estado={"usado"}
                  valor={"10$"}
             foto={Mochila}
                  />
                {/* </div> */}
              </div>
            {/* ))} */}

                <div className="card-container mt-4">
                 
                <CardProduto
                  
                  titulo={"pofifdvhfdiuhbid"}
                  categoria={"livro"}
                  estado={"usado"}
                  valor={"10$"}
             foto={Mochila}
                  />
                </div>
 
                <div className="card-container mt-4">
                 
                <CardProduto
                  
                  titulo={"pofifdvhfdiuhbid"}
                  categoria={"livro"}
                  estado={"usado"}
                  valor={"10$"}
             foto={Mochila}
                  />
                </div>
       
                <div className="card-container mt-4 ">
                 
                <CardProduto
                  
                  titulo={"pofifdvhfdiuhbid"}
                  categoria={"livro"}
                  estado={"usado"}
                  valor={"10$"}
             foto={Mochila}
                  />
                </div>
            
              
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        
            </main>
  );
}



    