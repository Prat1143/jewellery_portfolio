import React from 'react';
import { ArrowRight } from 'lucide-react';

const CollectionItem = ({ imageSrc, alt, className }) => (
  <div className={`relative ${className}`}>
    <img src={imageSrc} alt={alt} className="w-full h-full object-cover" />
  </div>
);

export default function MensCollectionShowcase() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto overflow-hidden pb-8">
        <div className="flex justify-center items-center mb-8">
          <h2 className="text-4xl font-serif text-emerald-800">COLLECTION FOR MEN'S</h2>
          {/* <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center">
            View All
            <ArrowRight className="ml-1 w-4 h-4" />
          </a> */}
        </div>
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4">
          {/* Masonry items with varying heights */}
          <CollectionItem 
            imageSrc="/men_coll4.jpeg" 
            alt="Men's hands with rings and bracelet"
            className="mb-4" // Add margin for spacing
          />
          <CollectionItem 
            imageSrc="/men_coll3.jpeg" 
            alt="Gold chain bracelet"
            className="mb-4"
          />
          <CollectionItem 
            imageSrc="/mens_jwellery4.jpg" 
            alt="Silver necklace"
            className="mb-4" 
          />
          <CollectionItem 
            imageSrc="/mens_jwellery3.jpg" 
            alt="Man wearing gold necklaces"
            className="mb-4" 
          />
          <CollectionItem 
            imageSrc="/mens_jwellery5.jpg" 
            alt="Stylish watch"
            className="mb-4" 
          />
          <CollectionItem 
            imageSrc="/mens_jwellery1.jpg" 
            alt="Fashionable sunglasses"
            className="mb-4" 
          />
          <CollectionItem 
            imageSrc="/men_coll2.jpeg" 
            alt="Fashionable sunglasses"
            className="mb-4" 
          />
        </div>
      </div>
    </section>
  );
}
