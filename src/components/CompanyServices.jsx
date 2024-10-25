import React from 'react'
// import { Diamond, Gift, Ring } from 'lucide-react'
import { CircleCheckBig, Truck, PackageCheck } from 'lucide-react';

const Service = ({ icon, title, description }) => (
    <div className="flex flex-col items-center text-center">
        <div className="text-emerald-800 mb-4">
            {icon}
        </div>
        <h3 className="text-2xl font-serif text-emerald-800 mb-2">{title}</h3>
        <p className="text-emerald-700">{description}</p>
    </div>
)

export default function CompanyServices() {
    const services = [
        {
            icon: <PackageCheck size={48} />,
            title: "Quality",
            description: "Exceptional quality from top to bottom"
        },
        {
            icon: <Truck size={48} />,
            title: "Delivery",
            description: "Fast and free delivery worldwide"
        },
        {
            icon: <CircleCheckBig size={48} />,
            title: "Guarantee",
            description: "100% customer satisfaction guaranteed"
        }
    ]

    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {services.map((service, index) => (
                        <Service key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    )
}
