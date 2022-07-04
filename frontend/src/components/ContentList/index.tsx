import React, { useEffect, useState } from 'react';
import Image from "../../components/assets/images/Rectangle.png";
import { getRecipes, postRecipes } from '../../services/recipes';
import './styles.css';

interface Recipe {
  id: number;
  titulo: string;
  foto: string;
  nome: string;
  descricao: string;
  valor: number;
  categoria_id: {
        references: {
           categoria:string;
            id: number;
  },
   usuario_id: {
  
        references: {
            usuarios:string;
           id: number;
        }

   }

}
}


const ContentList: React.FC = () => {
  const [recipeList, setRecipeList] = useState<Recipe[]>([] as Recipe[])

  useEffect(()=>{
    getRecipes().then(recipes => setRecipeList(
      recipes.map(recipe => Object.assign(recipe, {
        ...recipe,
        foto: Image
      }))
    ))
  },[])

  const handleAddRecipe = async () => {
    const newRecipe = await postRecipes({
      id: 10,
      titulo: "Receita",
  foto: Image,
  nome: "RECEWITASDE TEST",
      descricao: "SABOJIGIDHBIJNIFI",
  valor: 25.00,
    
     
    })
    setRecipeList(oldRecipeList => [...oldRecipeList, newRecipe])
  }
  
  return (
      <main className="content-container">

<>
  {/* Hello world */}
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-2"></div>
      <div className="col-md-10">

 <h1>
          todas as receitas
          </h1>
          <div className="grid-container">
            {recipeList.map(recipe=>(
              <div className="grid-item" key={recipe.id}>
                <div className="card-container">
                  <img src={recipe.foto} alt={recipe.titulo} />
                  <span>
                    {recipe.titulo}
                  </span>
                  <button>
                      Conferir
                  </button>
                </div>
              </div>
            ))}
              
          </div>

      </div>
    </div>
  </div>
</>
         
          <button onClick={handleAddRecipe}>Inserir Receita</button>
      </main>
  );
}

export default ContentList;