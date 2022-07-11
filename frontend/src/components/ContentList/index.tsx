import Selected from '../Selected';
import CardProduto from '../CardProduto';
import MochilaBatman from '../assets/images/mochila-batman.png';
import MochilaPetMacaco from '../assets/images/mochila-pet-macaco.png';
import MochilaHomemAranha from '../assets/images/mochila-homem-aranha.jpg';


import './styles.css';
import { Sidebar } from '../Sidebar';


interface Produto {
  id: number;
  titulo:string;
  estado: string;
  valor:string;
  foto: string;
  categoria: string;

}


export default function Produtos() {
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
    <main className="container-lg ">

<div className="content-container">
  <div className="row">
    <div className="col-md-4 ">
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
                <CardProduto 
                  titulo={"Mochila Escolar Infantil do Batman"}
                  categoria={"livro"}
                  estado={"Semi-Novo"}
                  valor={"30,00"}
                  foto={MochilaBatman}
                  />
                <CardProduto 
                  titulo={"Mochila Escolar Homem-Aranha"}
                  categoria={"livro"}
                  estado={"Semi-Novo"}
                  valor={"40,00"}
                  foto={MochilaHomemAranha}
                  />
                <CardProduto 
                  titulo={"Mochila Escolar Pets Macaco"}
                  categoria={"livro"}
                  estado={"Usado"}
                  valor={"20,00"}
                  foto={MochilaPetMacaco}
                  />
                <CardProduto 
                  titulo={"Mochila Escolar Infantil do Batman"}
                  categoria={"livro"}
                  estado={"Semi-Novo"}
                  valor={"30,00"}
                  foto={MochilaBatman}
                  />
                <CardProduto 
                  titulo={"Mochila Escolar Homem-Aranha"}
                  categoria={"livro"}
                  estado={"Semi-Novo"}
                  valor={"40,00"}
                  foto={MochilaHomemAranha}
                  />
                <CardProduto 
                  titulo={"Mochila Escolar Pets Macaco"}
                  categoria={"livro"}
                  estado={"Usado"}
                  valor={"20,00"}
                  foto={MochilaPetMacaco}
                  />
                <CardProduto 
                  titulo={"Mochila Escolar Infantil do Batman"}
                  categoria={"livro"}
                  estado={"Semi-Novo"}
                  valor={"30,00"}
                  foto={MochilaBatman}
                  />
                <CardProduto 
                  titulo={"Mochila Escolar Homem-Aranha"}
                  categoria={"livro"}
                  estado={"Semi-Novo"}
                  valor={"40,00"}
                  foto={MochilaHomemAranha}
                  />
                <CardProduto 
                  titulo={"Mochila Escolar Pets Macaco"}
                  categoria={"livro"}
                  estado={"Usado"}
                  valor={"20,00"}
                  foto={MochilaPetMacaco}
                  />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        
            </main>
  );
}



    