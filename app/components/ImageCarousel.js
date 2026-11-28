"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./carousel.css"; // 👈 Add this line

const ImageCarousel = () => {
  const desktopImages = [
    "/images/chemical1.jpg",
    "/images/chemical2.jpg",
    "/images/chemical3.jpg",
    "/images/chemical4.jpg",
  ];

  const mobileImages = [
    "/images/chemical1-mobile.jpg",
    "/images/chemical2-mobile.jpg",
    "/images/chemical3-mobile.jpg",
    "/images/chemical4-mobile.jpg",
  ];

  return (
    <div className="w-full bg-base_color">
      
      {/* ================= DESKTOP CAROUSEL ================= */}
      <div className="hidden md:block">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="w-full h-[600px] custom-swiper"
        >
          {desktopImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Desktop slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ================= MOBILE CAROUSEL ================= */}
      <div className="block md:hidden">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="w-full h-[280px] custom-swiper"
        >
          {mobileImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Mobile slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImageCarousel;