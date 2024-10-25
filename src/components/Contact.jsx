// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-customBeige">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl font-bold text-emerald-800">Contact Us</h2>
                <form className="mt-8 max-w-lg mx-auto">
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        className="border border-emerald-300 p-2 rounded w-full"
                    />
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        className="border border-emerald-300 p-2 rounded mt-4 w-full"
                    />
                    <textarea 
                        placeholder="Your Message" 
                        className="border border-emerald-300 p-2 rounded mt-4 w-full h-32"
                    />
                    <button 
                        type="submit" 
                        className="bg-emerald-700 text-white p-2 rounded mt-4 hover:bg-emerald-800 transition duration-300"
                    >
                        Send
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
