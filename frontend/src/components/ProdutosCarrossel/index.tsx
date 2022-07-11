import { Swiper, SwiperSlide } from "swiper/react";
import MochilaBatman from '../assets/images/mochila-batman.png';
import MochilaPetMacaco from '../assets/images/mochila-pet-macaco.png';
import MochilaHomemAranha from '../assets/images/mochila-homem-aranha.jpg';
import LancheiraFrozen from '../assets/images/lancheira-frozen.png';
import CadernoVermelho from '../assets/images/caderno-vermelho.png';
import LivroAmoras from '../assets/images/livro-amoras.png';
import MacacaoInfantil from '../assets/images/macacao-infantil.png';


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import CardProduto from '../CardProduto';
import * as S from './styles';

const ProdutosCarrossel = () => {
    return (
        <S.Container>
        <Swiper
            slidesPerView={4}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            spaceBetween={-50}
            className="mySwiper"
            breakpoints={{
                // when window width is >= 640px
                0: {
                    slidesPerView: 1
                },
                640: {
                    slidesPerView: 2
                },
                940: {
                    slidesPerView: 3
                },
                // when window width is >= 768px
                1280: {
                    slidesPerView: 4
                },
            }}
        >
            <SwiperSlide><CardProduto foto={MochilaBatman} titulo='Mochila Escolar Infantil Batman' estado='Semi-Novo' valor='30,00'/></SwiperSlide>
            <SwiperSlide><CardProduto foto={MochilaHomemAranha} titulo='Mochila Escolar do Homem-Aranha' estado='Semi-Novo' valor='40,00'/></SwiperSlide>
            <SwiperSlide><CardProduto foto={MochilaPetMacaco} titulo='Mochila Escolar Pets Macaco' estado='Usado' valor='20,00'/></SwiperSlide>
            <SwiperSlide><CardProduto foto={MochilaBatman} titulo='Mochila Escolar Infantil Batman' estado='Semi-Novo' valor='30,00'/></SwiperSlide>
            <SwiperSlide><CardProduto foto={MochilaHomemAranha} titulo='Mochila Escolar do Homem-Aranha' estado='Semi-Novo' valor='40,00'/></SwiperSlide>
            <SwiperSlide><CardProduto foto={MochilaPetMacaco} titulo='Mochila Escolar Pets Macaco' estado='Usado' valor='20,00'/></SwiperSlide>
            <SwiperSlide><CardProduto foto={MochilaBatman} titulo='Mochila Escolar Infantil Batman' estado='Semi-Novo' valor='30,00'/></SwiperSlide>
            <SwiperSlide><CardProduto foto={MochilaHomemAranha} titulo='Mochila Escolar do Homem-Aranha' estado='Semi-Novo' valor='40,00'/></SwiperSlide>
        </Swiper>
    </S.Container>
    )
}

export default ProdutosCarrossel;

export const ProdutosCarrosselRecentes = () => {
    return (
        <S.Container>
        <Swiper
            slidesPerView={4}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            navigation={true}
            modules={[Navigation]}
            spaceBetween={-50}
            className="mySwiper"
            breakpoints={{
                // when window width is >= 640px
                0: {
                    slidesPerView: 1
                },
                640: {
                    slidesPerView: 2
                },
                940: {
                    slidesPerView: 3
                },
                // when window width is >= 768px
                1280: {
                    slidesPerView: 4
                },
            }}
        >
            <SwiperSlide><CardProduto foto={LancheiraFrozen} titulo='Lancheira Infantil Térmica Frozen II' estado='Usado' valor='15,00'/></SwiperSlide>
            <SwiperSlide><CardProduto foto={MacacaoInfantil} titulo='Conjunto Moletom Infantil Canguru, 8 anos' estado='Usado' valor='20,00'/></SwiperSlide>
            <SwiperSlide><CardProduto foto={LivroAmoras} titulo='Amoras - Emicida, Livro Impresso' estado='Semi-Novo' valor='10,00'/></SwiperSlide>
            <SwiperSlide><CardProduto foto={CadernoVermelho} titulo='Caderno Capa Dura 96 f., Vermelho, Spiral' estado='Novo' valor='4,20'/></SwiperSlide>
            <SwiperSlide><CardProduto foto={LancheiraFrozen} titulo='Lancheira Infantil Térmica Frozen II' estado='Usado' valor='15,00'/></SwiperSlide>
            <SwiperSlide><CardProduto foto={MacacaoInfantil} titulo='Conjunto Moletom Infantil Canguru, 8 anos' estado='Usado' valor='20,00'/></SwiperSlide>
            <SwiperSlide><CardProduto foto={LivroAmoras} titulo='Amoras - Emicida, Livro Impresso' estado='Semi-Novo' valor='10,00'/></SwiperSlide>
            <SwiperSlide><CardProduto foto={CadernoVermelho} titulo='Caderno Capa Dura 96 f., Vermelho, Spiral' estado='Novo' valor='4,20'/></SwiperSlide>
        </Swiper>
    </S.Container>
    )
}