// src/components/Gallery.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    imageUrl: './ring1.jpg',
    name: 'Jewellery Item 1'
  },
  {
    imageUrl: './ring2.jpg',
    name: 'Jewellery Item 2'
  },
  {
    imageUrl: './ring3.jpg',
    name: 'Jewellery Item 3'
  },
  {
    imageUrl: './ring4.jpg',
    name: 'Jewellery Item 4'
  },
  {
    imageUrl: './ring5.jpg',
    name: 'Jewellery Item 5'
  },
  {
    imageUrl: './ring6.jpg',
    name: 'Jewellery Item 6'
  },
  {
    imageUrl: './ring7.jpg',
    name: 'Jewellery Item 7'
  },
  {
    imageUrl: './ring8.jpg',
    name: 'Jewellery Item 8'
  }
  // Add more items as needed
];

const Gallery = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6.5, // Show 6 full slides and half of the 7th one
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-left mb-8 text-emerald-800">Signature Rings</h2>
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="relative group">
              <img
                src={slide.imageUrl}
                alt={slide.name}
                className="h-[400px] w-full object-cover"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold">{slide.name}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Gallery;
