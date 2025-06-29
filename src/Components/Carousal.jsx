import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../App.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slider1 from "../assets/images/slider1.jpeg";
import slider2 from "../assets/images/slider2.png";
import slider3 from "../assets/images/slider3.jpeg";
import slider4 from "../assets/images/slider4.jpg";
const Carousal = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <img loading="lazy" className="select-none" src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-between">
          <img loading="lazy" className="select-none" src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-between">
          <img loading="lazy" className="select-none" src={slider3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="flex items-center justify-between">
          <img loading="lazy" className="select-none" src={slider4} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousal;
