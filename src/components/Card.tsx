import img from "../assets/service/serviceimg2.jpg";
import { ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  image: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const ServiceCard = ({ title, image, onMouseEnter, onMouseLeave }: ServiceCardProps) => {
  return (
      <div 
        className="w-full h-[600px] rounded-3xl overflow-hidden bg-[#171717] border-2 border-zinc-500 transition-colors duration-300 hover:bg-gradient-to-br hover:bg-[#AC396B] group"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* Header */}
        <div className="px-6 py-12">
          <h2 className="text-white text-[32px] font-semibold tracking-tight">
            {title}
          </h2>
        </div>

        <div className="w-full h-[2px] bg-zinc-500 group-hover:bg-white/20" />

        {/* Card stack and image */}
        <div className="relative pt-20 h-[calc(100%-140px)]">
          {/* Background card layers */}
          <div className="absolute top-12 left-4 right-4 h-[85%] bg-[#454545] rounded-3xl z-0" />
          <div className="absolute top-16 left-2 right-2 h-[85%] bg-[#9E9D9D] rounded-3xl z-0" />


          {/* Foreground image card */}
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl h-full">
            <div className="relative h-full rounded-3xl overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />

              <div className="absolute bg-[#171717] right-0 bottom-0 w-36 h-36 rounded-tl-[60%] " />


              {/* Floating gradient button over image */}
              <div className="absolute bottom-1 right-1 z-20">
                <div className="w-30 h-30 rounded-full bg-gradient-to-br from-[#AB69B3] to-[#C7619C] group-hover:from-[#AC396B] group-hover:to-[#AC396B] flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-300">
                  <ArrowUpRight color="white" className="w-16 h-16" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
  );
};

export default ServiceCard;
