import { Swiper, SwiperSlide } from "swiper/react";

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
            <SwiperSlide><CardProduto titulo='Mochila Escolar Infantil Batman 1' estado='Usado' valor='99'/></SwiperSlide>
            <SwiperSlide><CardProduto titulo='Mochila Escolar Infantil do Batman 2' estado='Usado' valor='99'/></SwiperSlide>
            <SwiperSlide><CardProduto titulo='Mochila Escolar Infantil do Batman 3' estado='Usado' valor='99'/></SwiperSlide>
            <SwiperSlide><CardProduto titulo='Mochila Escolar Infantil do Batman 4' estado='Usado' valor='99'/></SwiperSlide>
            <SwiperSlide><CardProduto titulo='Mochila Escolar Infantil do Batman 5' estado='Usado' valor='99'/></SwiperSlide>
            <SwiperSlide><CardProduto titulo='Mochila Escolar Infantil do Batman 6' estado='Usado' valor='99'/></SwiperSlide>
            <SwiperSlide><CardProduto titulo='Mochila Escolar Infantil do Batman 7' estado='Usado' valor='99'/></SwiperSlide>
            <SwiperSlide><CardProduto titulo='Mochila Escolar Infantil do Batman 8' estado='Usado' valor='99'/></SwiperSlide>
        </Swiper>
    </S.Container>
    )
}

export default ProdutosCarrossel;
