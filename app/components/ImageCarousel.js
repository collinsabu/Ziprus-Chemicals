"use client"; // Ensure this component is client-side

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // Optional for autoplay functionality
import '../ImageCarousel.css'; // Import your custom CSS

// ImageCarousel component
const ImageCarousel = () => {
  const images = [
    '/images/chemical1.jpg', // Replace with your own image paths
    '/images/chemical2.jpg',
    '/images/chemical3.jpg',
    '/images/chemical4.jpg',
  ];

  return (
    <div className="w-full bg-base_color py-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }} // Optional: enable autoplay
        loop={true}
        className="w-full h-[600px]" // Adjust height as necessary
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={image}
              alt={`Carousel image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
