import * as S from './style'


export function Sidebar() {


    return (
        <aside className="mt-5 p-6   pt-4" >
          
            <span className="mt-5 pb-6 mb-6 fw-bold" >     
                   Filtros:
            </span> <br /><br />
            <span className="fw-semibol " > 


            Estados
            </span><br />
         
         
            <div className="flex flex-column  gap-8">

                
                    <S.inputCheckbox  type="checkbox" id="sp" />
                    <S.Label htmlFor="sp"> SP</S.Label><br />

                    <S.inputCheckbox type="checkbox" id="mg"  />
                    <S.Label htmlFor="mg"> MG</S.Label> <br />

                    <S.inputCheckbox  type="checkbox" id="rj" />
                    <S.Label htmlFor="rj"> RJ</S.Label><br />

                    <S.inputCheckbox  type="checkbox" id="rj"   />
                    <S.Label htmlFor="rj">RJ</S.Label><br />

                    <S.inputCheckbox  type="checkbox" id="pe"  />
                    <S.Label htmlFor="pe"> PE</S.Label><br />

                    <S.inputCheckbox  type="checkbox" id="go"  />
                    <S.Label htmlFor="go"> GO</S.Label><br />

                    <S.inputCheckbox  type="checkbox" id="rs"/>
                    <S.Label htmlFor="rs"> RS</S.Label><br /><br />
                    <span>
                    Categoria
                    </span><br /><br />
                
                    <S.inputCheckbox  type="checkbox" id="livros"  />
                    <S.Label htmlFor="livros"> livros</S.Label><br />
                    
                    <S.inputCheckbox  type="checkbox" id="mochila"  />
                    <S.Label htmlFor="mochila"> Mochila</S.Label><br />
                    <S.inputCheckbox  type="checkbox" id="Lancheira"  />
                    <S.Label htmlFor="lancheira"> Lancheira</S.Label><br />
                    <S.inputCheckbox  type="checkbox" id="uniforme"  />
                    <S.Label  htmlFor="uniforme"> Uniforme</S.Label><br />
                    <S.inputCheckbox  type="checkbox" id=" papelaria"  />
                    <S.Label htmlFor="papelaria">Papelaria</S.Label><br />
                    <S.inputCheckbox  type="checkbox" id="listas"  />
                    <S.Label htmlFor="listas">Listas</S.Label><br />
                   
            </div>
        </aside>
    )
}