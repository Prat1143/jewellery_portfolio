import React from 'react';

const TrendingShowcase = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
                <div className="md:w-3/5 mb-8 md:mb-0 flex justify-center">
                    <div className="grid grid-cols-3 gap-4 max-w-2xl">
                        <img
                            src="/trending_left.PNG"
                            alt="Layered necklace with circular pendant"
                            className="w-full h-full object-cover"
                        />
                        <img
                            src="/trendingCenter.PNG"
                            alt="Gold bracelet"
                            className="w-full h-full object-cover row-span-2 -mt-3"
                        />
                        <img
                            src="/trending_right.PNG"
                            alt="Necklace with pearl pendant and earrings"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className="md:w-2/5 md:pl-8">
                    <h2 className="text-4xl font-serif text-emerald-800 mb-4">TRENDING IN SS '24</h2>
                    <p className="text-xl text-emerald-700 mb-4">
                        Carefully Curated Pieces For You Layer, Style And Mix
                    </p>
                    <p className="text-lg text-emerald-600 mb-6">
                        Gold Dalywear Jwellery To Elevate Your Summer Looks.
                    </p>
                    <button className="bg-emerald-700 text-white py-2 px-6 rounded hover:bg-emerald-800 transition duration-300">
                        SHOP NOW
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TrendingShowcase;