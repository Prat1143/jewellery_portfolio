import React from 'react';
import { Search, Camera, Mic, User, Heart, ShoppingCart } from 'lucide-react';

export default function Header() {
    return (
        <header className="bg-white py-4 px-6 flex items-center justify-between">
            <div className="flex items-center">
                {/* <svg
                    className="w-8 h-8 text-emerald-800"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M16 2s1.5 2 2 3.5c.5 1.5 0 2 -.5 3.5s-2.5 5.5 -3.5 6.5" />
                    <path d="M8 2s-1.5 2 -2 3.5c-.5 1.5 0 2 .5 3.5s2.5 5.5 3.5 6.5" />
                </svg> */}
                <span className="ml-2 text-2xl font-semibold text-emerald-800">Craft Surprise</span>
            </div>

            {/* <div className="flex-1 max-w-2xl mx-8">
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full py-2 pl-10 pr-4 text-gray-700 bg-emerald-800 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-600"
                    />
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                        <Search className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                        <Camera className="w-5 h-5 text-gray-400 mr-2" />
                        <Mic className="w-5 h-5 text-gray-400" />
                    </div>
                </div>
            </div> */}

            <nav className="flex items-center space-x-6">
                <a href="#gallery" className="text-emerald-800 hover:text-emerald-600">Signature Rings</a>
                <a href="#collection" className="text-emerald-800 hover:text-emerald-600">Collection</a>
                <a href="#contact" className="text-emerald-800 hover:text-emerald-600">Contact Us</a>
                {/* <User className="w-6 h-6 text-emerald-800 cursor-pointer" />
                <Heart className="w-6 h-6 text-emerald-800 cursor-pointer" />
                <ShoppingCart className="w-6 h-6 text-emerald-800 cursor-pointer" /> */}
            </nav>
        </header>
    );
}
