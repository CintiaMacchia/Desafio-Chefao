
import { GoLocation } from 'react-icons/go';
import { IoIosArrowDown } from 'react-icons/io';
import { BsPerson } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';

import logo from '../../components/assets/images/logo.png';
import "./styles.css";
import ButonEntrar from '../ButonCheio';
import ButtonBorda from '../ButtonBorda';

import ContainerPadrao from '../ContainerPadrao';




function Menu() {

	return (

		<header >

			< div className="row ">
				<div className="  shadow-sm p-3 mb-2bg-body rounded ">
					<ContainerPadrao >
						<div className="d-flex justify-content-end">
							<a className="underline me-4 text-dark"><GoLocation className='mx-2 fs-5  icon-header' />Todos os Estados< IoIosArrowDown /> </a>
							<a className=" underline text-dark"><BsPerson className='mx-2 fs-5 icon-header' />Minha Conta </a>

						</div>
					</ContainerPadrao>
				</div>

 

				
					<div className="row  mb-4">
					<ContainerPadrao>
						<div className="d-flex justify-content-evenly ">
						<div className=" ">
					
					<div className="mt-3" >
						<img src={logo} alt="logo" title='logo-do-site' />
					</div>

				</div>
				<div className=" ">
					<div className="d-flex "> <input className='barra-de-pesquisa d-flex mt-4 ' type="text" placeholder='Pesquise os materias didaticos que o seu filho precisa' />
						<BiSearch className='icon-search mt-4' /></div>
				</div>
				<div className="boton-favorito-publicar">
					<ButonEntrar typeButton="submit" text={"Favoritos"} />

				</div>
				<div className="boton-favorito-publicar">
					<ButtonBorda typeButton="submit" text={"publicar"} />
			
				</div>
						</div>
			
					</ContainerPadrao >
					</div>




				
					<div className="row categorias">
					
						<div className="col-md-12   d-flex justify-content-around ">
						
							<a href="#" className=" underline">Todas as Categorias</a>
							<a href="#" className="underline " >Lancheiras</a>

							<a href="#" className="underline ">Listas Escolares</a>
							<a href="#" className="underline">Livros</a>
							<a href="#" className="underline">Papelaria</a>
							<a href="#" className="underline">Uniformes</a>
						
						</div>
					
					</div>


				
			</div>








		</header>

	)
}

export default Menu
