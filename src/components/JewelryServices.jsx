import React from 'react'
// import { Diamond, Gift, Ring } from 'lucide-react'
import { Gem, Gift, DraftingCompass } from 'lucide-react';

const Service = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center">
    <div className="text-emerald-800 mb-4">
      {icon}
    </div>
    <h3 className="text-2xl font-serif text-emerald-800 mb-2">{title}</h3>
    <p className="text-emerald-700">{description}</p>
  </div>
)

export default function JewelryServices() {
  const services = [
    {
      icon: <Gem size={48} />,
      title: "Diamond Selection",
      description: "Our Consultants Will Help You To Choose The Right Size"
    },
    {
      icon: <Gift size={48} />,
      title: "Gift Package",
      description: "We'll Choose The Perfect Gift Box For Your Present"
    },
    {
      icon: <DraftingCompass size={48} />,
      title: "Design Your Ring",
      description: "Individual Engraving To Perpetuate The Deepest Feeling"
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
