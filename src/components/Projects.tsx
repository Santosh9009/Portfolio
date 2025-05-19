import { useState, useEffect } from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import projectimg1 from "../assets/project/project1.png";
import projectimg2 from "../assets/project/project2.png";

const portfolioItems = [
  {
    id: 1,
    title: "SIYA",
    subtitle: "A heartfelt story that explores self-discovery and inner strength, blending fantasy with emotional depth. Officially selected at Jagran Film Festival and Ahmedabad International Film Festival, this film brings a visually immersive and soulful journey to life.",
    image: projectimg1,
  },
  {
    id: 2,
    title: "VFX SHOWREEL",
    subtitle: "A showcase of my expertise in visual storytelling through seamless compositing, blending live-action and VFX to create captivating cinematic moments. From intricate keying to dynamic scene enhancements, this reel highlights my passion for crafting immersive",
    image: projectimg2,
  }
];

const PortfolioCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Autoplay carousel
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!isHovered) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 2) % portfolioItems.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev - 2 < 0 ? portfolioItems.length - 2 : prev - 2
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  return (
    <section
      className="w-full px-16 md:px-24 mx-auto  min-h-screen flex flex-col justify-center items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex items-center justify-between w-full mb-12"> 
        <h2 className="text-5xl font-bold text-gray-800"> 
          Check out my <span className="bg-gradient-to-b from-[#AB69B3] to-[#C7619C] bg-clip-text text-transparent">Portfolio!</span>
        </h2>
        <button className="bg-gradient-to-r from-[#AB69B3] to-[#C7619C] text-white px-8 py-3 rounded-full hover:bg-pink-600 transition"> 
          See All
        </button>
      </div>

      {/* Carousel */}
      <div
        className="relative w-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${(activeIndex / 2) * 100}%)` }}
        >
          {portfolioItems.map((item) => (
            <div key={item.id} className="w-full md:w-1/2 flex-shrink-0 px-2">
              <div className="relative group h-96 rounded-xl overflow-hidden mx-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                // Overlay with title and subtitle
                <div className="absolute bottom-0 left-4 right-4 w-auto bg-gradient-to-t from-black/40 via-black/20 to-transparent text-white px-4 py-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out backdrop-blur-md rounded-2xl">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-base mt-4 text-[#FFEAD5]">{item.subtitle}</p>
                </div>

                {/* Right arrow top-right */}
                <button
                  onClick={nextSlide}
                  className="absolute top-4 right-4 group-hover:bg-gradient-to-r from-[#AB69B3] to-[#C7619C] text-pink-500 border border-pink-500 group-hover:border-transparent rounded-full p-1 transition-all duration-300 group-hover:text-white"
                >
                  <ArrowRight size={40} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {Array.from({ length: Math.ceil(portfolioItems.length / 2) }).map(
          (_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx * 2)}
              className={`w-3 h-3 rounded-full ${
                idx * 2 === activeIndex ? "bg-pink-500" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          )
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {[
          "Video Editing",
          "VFX Artist",
          "Filmmaking",
          "Graphic Design",
          "Post-Production",
        ].map((tag) => (
          <button
            key={tag}
            className="bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
          >
            {tag}
          </button>
        ))}
      </div>
    </section>
  );
};

export default PortfolioCarousel;
