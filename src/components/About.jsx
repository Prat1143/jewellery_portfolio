// src/components/About.jsx
import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-14 bg-customBeige">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-emerald-800">WE ARE JUST JEWELS</h2>
                <p className="mt-3 text-emerald-800">Our pieces are a merge of luxury, vintage pieces for everyday wear</p>
                <button className="bg-emerald-800 text-white py-3 px-6 rounded-md inline-flex items-left text-left mt-6">
                    ABOUT
                </button>
            </div>
        </section>
    );
};

export default About;