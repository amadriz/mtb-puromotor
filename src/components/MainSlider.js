import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper';
// swiper is for carousels
import 'swiper/css/autoplay';
// powerslap for video background
import bgVideo from "../assets/videos/bgWebMain.mp4";



export const MainSlider = () => {
  return (
    <section className="bg-dark text-white position-relative overflow-hidden mt-100">
    {/* <!--Video--> */}
    {/* w-100 h-100 opacity-50 position-absolute end-0 top-0 bg-cover bg-center mainSliderBgImg     bg-no-repeat  " */}
    <video className="position-absolute opacity-75"
        autoPlay
        loop
        muted   
      >
        <source src={bgVideo} type="video/mp4"/>
      </video>
        {/* <div className="jarallax h-100 w-100" data-jarallax-video="mp4:../../src/assets/videos/officeloop.mp4">
        </div> */}
    <div className="container pt-15 pb-12 position-relative z-index-1">
        <div className="row pt-lg-9 pb-5 align-items-center">
            <div className="col-lg-8 mx-auto text-center mb-5 mb-lg-0">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    autoplay={true}
                    className="swiper-text w-100 height-3x fs-6 text-uppercase mb-3 text-white overflow-hidden">
                        <SwiperSlide className="justify-content-center">
                            Fotografía deportiva
                        </SwiperSlide>
                        <SwiperSlide className="justify-content-center">
                            MTB PuroMotor
                        </SwiperSlide>
                        <SwiperSlide className="justify-content-center">
                            www.sportivcr.com
                        </SwiperSlide>
                        <SwiperSlide className="justify-content-center">
                            Eventos Deportivos
                        </SwiperSlide>
                </Swiper>
                <h1 className="display-1 mb-4 mb-lg-5">
                    Los mejores en <span className="text-gradient-light">fotografía</span> de ciclismo
                </h1>
                <p className="mb-5 mb-lg-7 lead w-lg-60 mx-auto">
                    Somos apacionados del ciclismo
                </p>
                <div className="d-flex align-items-center justify-content-center">
                    <a href="#section" className="btn btn-danger btn-lg me-2 me-lg-3">Ver Galerías</a>
                </div>
            </div>
        </div>
    </div>

    {/* <!--Divider shape--> */}
    <svg className="position-absolute start-0 bottom-0 text-white" preserveAspectRatio="none" width="100%" height="48" viewBox="0 0 1460 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M122 22.8261L0 0V120H1460V0L1338 22.8261C1217 44.1304 973 88.2609 730 88.2609C487 88.2609 243 44.1304 122 22.8261Z"
                fill="currentColor"></path>
        </svg>
</section>


  )
}
