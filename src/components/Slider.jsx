import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { EffectFade, Autoplay, Navigation, Pagination } from 'swiper/modules';

export default function Slider() {
  return (
    <div className=' mb-3 sm:mb-8'>
    <>
      <Swiper 
        // spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}

        autoplay={{
            delay: 500,
            disableOnInteraction: false,
          }}
        modules={[EffectFade,Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://naturalicecreams.in/wp-content/uploads/Tilgul_V2_Web-Banner_2560x1078px.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://naturalicecreams.in/wp-content/uploads/Gauva_V3_Web-Banner_2560x1078px.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://naturalicecreams.in/wp-content/uploads/Strawberry-Web-banner.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://naturalicecreams.in/wp-content/uploads/2.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
    </div>
  );
}
