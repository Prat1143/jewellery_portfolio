import React from 'react'
import { ArrowRight } from 'lucide-react'

const CollectionItem = ({ imageSrc, label, isLarge = false }) => (
    <div className={`relative ${isLarge ? 'col-span-2 row-span-2' : ''}`}>
        <img src={imageSrc} alt={label} className="w-full h-full object-cover rounded-lg" />
        <div className="absolute bottom-4 left-4 bg-white px-2 py-1 rounded text-sm text-emerald-800">
            {label}
        </div>
    </div>
)

export default function CollectionShowcase() {
    const collections = [
        { imageSrc: "./jwellery1.jpg", label: "Bridal Heavy Jewellery", isLarge: true },
        { imageSrc: "/jwellery2.jpg", label: "Gold Dealywear Jewellery" },
        { imageSrc: "/jwellery3.jpg", label: "Silver & Stones" },
        { imageSrc: "/jwellery4.jpg", label: "Gold & Stones Necklace" },
        { imageSrc: "/jwellery5.jpg", label: "Platinum Jewellery" },
    ]

    return (
        <section className="py-16 px-4 bg-white" id="collection">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-center items-center mb-8  text-center">
                    <h2 className="text-4xl font-serif text-emerald-800">COLLECTION</h2>
                    {/* <a href="#" className="text-emerald-600 hover:text-emerald-700 flex items-center">
                        View All
                        <ArrowRight className="ml-1 w-4 h-4" />
                    </a> */}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {collections.map((item, index) => (
                        <CollectionItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    )
}
