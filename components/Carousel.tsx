import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import BoxSlide from './BoxSlide';

function Carousel() {
    return (
        <Swiper
            className='w-[90vw] h-[27vh] mx-[75px] justify-center
            lg:h-[32.5vh]
            xl:h-[42.5vh]'
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={3}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            >
            <SwiperSlide className='flex justify-center'>
                <BoxSlide 
                    name='Mint Chocolate'
                    image='mint-chocolate.png'
                />
            </SwiperSlide>
            <SwiperSlide className='flex justify-center'>
                <BoxSlide 
                    name='Caramel Fudge'
                    image='caramel-fudge.png'
                />
            </SwiperSlide>
            <SwiperSlide className='flex justify-center'>
                <BoxSlide 
                    name='Vanilla'
                    image='vanilla.png'
                />
            </SwiperSlide>
            <SwiperSlide className='flex justify-center'>
                <BoxSlide 
                    name='Coffee'
                    image='coffee.png'
                />
            </SwiperSlide>
            <SwiperSlide className='flex justify-center'>
                <BoxSlide 
                    name="Cookies & Cream"
                    image='cookies-and-cream.png'
                />
            </SwiperSlide>
            <SwiperSlide className='flex justify-center'>
                <BoxSlide 
                    name='Rocky Road'
                    image='rocky-road.png'
                />
            </SwiperSlide>
        </Swiper>
    )
}

export default Carousel