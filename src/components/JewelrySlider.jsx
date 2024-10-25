"use client"

import React, { useState, useRef } from 'react'
import Slider from 'react-slick'
import { ChevronUp, ChevronDown } from 'lucide-react'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const slides = [
  {
    imageUrl: "https://media.istockphoto.com/id/1277517088/photo/fancy-designer-antique-golden-bracelets-for-woman-fashion.jpg?s=612x612&w=0&k=20&c=n49O0S5rIgzxJX5bU1YjwRHfou0DYPcmsv-N5JAAM14=",
    productName: "Traditional and Fashion Diamond earring",
    productImageUrl: "/placeholder.svg?height=100&width=100"
  },
  {
    imageUrl: "https://cdn.pixabay.com/photo/2024/03/27/19/39/ai-generated-8659741_640.jpg",
    productName: "Traditional and Fashion Diamond earring22222222",
    productImageUrl: "/placeholder.svg?height=100&width=100"
  },
  // Add more slides as needed
]

const staticContent = {
  title: "All jewels",
  subtitle: "Living with art. Check our wearable sculptures.",
  buttonText: "SHOP THE COLLECTION",
}

export default function JewelrySlider() {
  const sliderRef = useRef(null)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    appendDots: (dots) => (
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-2 h-2 bg-white rounded-full mx-1 my-2"></div>
    )
  }

  return (
    <div className="relative w-full h-[540px] bg-emerald-800 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=540&width=960')] bg-cover bg-center opacity-10"></div>
      <div className="relative z-10 flex flex-col md:flex-row h-full">
        <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 text-left">{staticContent.title}</h2>
          <p className="text-lg md:text-xl text-white mb-8 text-left">{staticContent.subtitle}</p>
          <button className="bg-stone-200 text-emerald-800 py-3 px-6 rounded-md inline-flex items-left text-left">
            {staticContent.buttonText}
            <span className="ml-2">→</span>
          </button>
        </div>
        <div className="w-full md:w-1/2 relative h-[300px] md:h-full">
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slide, index) => (
              <div key={index} className="h-[300px] md:h-[540px]">
                <img src={slide.imageUrl} alt="Jewelry" className="w-full h-full object-cover" />
                
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* Arrow buttons container */}
      <div className="absolute right-4 md:right-12 top-1/2 transform -translate-y-1/2 z-20 flex flex-col">
        <button onClick={() => sliderRef.current?.slickPrev()} className="bg-emerald-700 p-2 rounded-full mb-2">
          <ChevronUp className="text-white" />
        </button>
        <button onClick={() => sliderRef.current?.slickNext()} className="bg-emerald-700 p-2 rounded-full">
          <ChevronDown className="text-white" />
        </button>
      </div>
    </div>
  )
}
