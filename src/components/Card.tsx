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
        className="w-full max-w-sm rounded-3xl overflow-hidden bg-[#171717] border border-zinc-700"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* Header */}
        <div className="px-6 py-5">
          <h2 className="text-white text-[32px] font-semibold tracking-tight">
            {title}
          </h2>
        </div>

        <div className="w-full h-px bg-zinc-700" />

        {/* Card stack and image */}
        <div className="relative pt-20 pb-10 px-5">
          {/* Background card layers */}
          <div className="absolute top-12 left-6 right-6 h-52 bg-white/10 rounded-2xl z-0" />
          <div className="absolute top-16 left-5 right-5 h-52 bg-white/5 rounded-2xl z-0" />

          {/* Foreground image card */}
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-xl">
            <div className="relative aspect-video rounded-3xl overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />

              <div className="absolute bg-[#171717] right-0 bottom-0 w-16 h-16 rounded-[3rem]">

              </div>

              {/* Floating gradient button over image */}
              <div className="absolute bottom-0 right-0 z-20">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                  <ArrowUpRight color="white" className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
  );
};

export default ServiceCard;
