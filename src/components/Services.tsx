import { useState } from 'react';
import servicebg from "../assets/service/servicebg.jpg";
import ServiceCard from './Card';

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const services = [
    {
      id: 'filmmaking',
      title: 'Filmmaking',
      image: '/src/assets/service/serviceimg1.jpg',
    },
    {
      id: 'visual-effects',
      title: 'Visual Effects',
      image: '/src/assets/service/serviceimg2.jpg',
    },
    {
      id: 'graphic-designing',
      title: 'Graphic Designing',
      image: '/src/assets/service/serviceimg3.jpg',
    },
  ];

  return (
    <div className="bg-[#1C1C1D] w-full px-8 py-16 relative overflow-hidden">
      {/* Background Image with Diagonal Lines */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url(${servicebg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          <div className="mb-6 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-white">My </span>
              <span className="bg-gradient-to-r from-[#AB69B3] to-[#C7619C] bg-clip-text text-transparent">Services</span>
            </h2>
          </div>
          
          <div className="max-w-lg">
            <p className="text-white text-lg">
              Bringing ideas to life with storytelling, visuals, and design.
              Explore how I can help elevate your project.
            </p>
          </div>
        </div>
        
        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              image={service.image}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}