import { useState } from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/Hetansa_Pic.svg";
import award1 from "../assets/Award1.svg";
import award2 from "../assets/Award2.svg";
import award3 from "../assets/Award3.svg";
import HRLogo from "../assets/HRLogo.svg";
import backgroundPic from "../assets/BackgroundPic.jpg";
import whatsappIcon from "../assets/whatsapp.svg";
import youtubeIcon from "../assets/youtube.svg";
import linkedinIcon from "../assets/linkedin.svg";
import instagramIcon from "../assets/instagram.svg";
import MobileMenu from "./MobileMenu";

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white relative overflow-hidden mt-24 md:mt-0">
      {/* Sidebar */}
      <div className="w-full lg:w-80 bg-white p-4 sm:p-6 flex flex-col items-center lg:items-center lg:py-24 relative z-50 pt-6 sm:pt-8">
        {/* Logo - visible only on desktop */}
        <div className="mb-8 lg:mb-12 hidden lg:block">
          <img 
            src={HRLogo} 
            alt="HR Logo" 
            className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 object-contain"
          />
        </div>

        {/* Mobile Menu */}
        <MobileMenu 
          isOpen={isMenuOpen} 
          onClose={() => setIsMenuOpen(false)}
          onToggle={toggleMenu}
        />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex flex-col items-center space-y-8">
          <a href="#home" className="text-pink-500 hover:text-pink-600 transition-colors text-2xl font-bold">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-pink-500 transition-colors text-2xl font-bold">
            About Me
          </a>
          <a href="#portfolio" className="text-gray-700 hover:text-pink-500 transition-colors text-2xl font-bold">
            Portfolio
          </a>
          <a href="#testimonials" className="text-gray-700 hover:text-pink-500 transition-colors text-2xl font-bold">
            Testimonials
          </a>
          <a href="#blog" className="text-gray-700 hover:text-pink-500 transition-colors text-2xl font-bold">
            Blog
          </a>
        </nav>
      </div>

      <div className="flex-1 flex flex-col bg-white relative pt-24 sm:pt-28 md:pt-0">
        {/* Profile Image - Mobile */}
        <motion.div 
          className={`md:hidden absolute left-1/2 transform -translate-x-1/2 -top-10 sm:-top-24 w-48 sm:w-56 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 z-0' : 'opacity-100 z-50'}`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img 
            src={profilePic}
            alt="Hetansa Rajkotia" 
            className="w-full h-full object-contain"
          />
        </motion.div>

        {/* Main Content with Purple Background */}
        <div className="bg-[linear-gradient(145deg,#673AB7_10%,#252124_50%)] relative overflow-hidden rounded-b-[1.5rem] sm:rounded-b-[2rem] md:rounded-b-[3rem] mt-24 sm:mt-28 md:mt-0">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0 opacity-30" 
            style={{
              backgroundImage: `url(${backgroundPic})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />

          <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 text-white z-10 relative min-h-[400px] sm:min-h-[450px] md:min-h-[600px] flex flex-col justify-center">
            <div className="w-full md:max-w-3xl mx-auto md:ml-16 md:mx-0 relative z-10">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-light mb-2 sm:mb-3">Hello!</h2>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">I am Hetansa Rajkotia</h1>
              <p className="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed mb-6 sm:mb-8 pr-4 max-w-2xl">
                A filmmaker, visual effects artist, and editor crafting stories through the lens of 
                creativity and innovation. With a deep passion for cinematic storytelling, I bring 
                narratives to life through visuals that inspire, engage, and leave a lasting impact.
              </p>

              {/* Social Icons */}
              <div className="flex items-center justify-center md:justify-start space-x-4 sm:space-x-6 md:space-x-8">
                <a href="#" className="text-white hover:text-pink-400 transition-all duration-300 transform hover:scale-110">
                  <img src={whatsappIcon} alt="WhatsApp" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </a>
                <a href="#" className="text-white hover:text-pink-400 transition-all duration-300 transform hover:scale-110">
                  <img src={youtubeIcon} alt="YouTube" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </a>
                <a href="#" className="text-white hover:text-pink-400 transition-all duration-300 transform hover:scale-110">
                  <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </a>
                <a href="#" className="text-white hover:text-pink-400 transition-all duration-300 transform hover:scale-110">
                  <img src={instagramIcon} alt="Instagram" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-8 sm:gap-12 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 bg-white">
          <img 
            src={award1}
            alt="The Women's Bioscope Award" 
            className="w-32 sm:w-40 md:w-auto md:h-32 lg:h-40 object-contain transform hover:scale-105 transition-all duration-300"
          />
          <img 
            src={award2}
            alt="Ahmedabad International Film Festival" 
            className="w-32 sm:w-40 md:w-auto md:h-32 lg:h-40 object-contain transform hover:scale-105 transition-all duration-300"
          />
          <img 
            src={award3}
            alt="Jagran Film Festival" 
            className="w-32 sm:w-40 md:w-auto md:h-32 lg:h-40 object-contain transform hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>

      {/* Profile Image - Desktop */}
      <motion.div 
        className="hidden md:block absolute right-4 lg:right-12 xl:right-24 2xl:right-36 bottom-20 sm:bottom-24 lg:bottom-32 w-56 sm:w-64 md:w-72 lg:w-76 h-auto z-50 transition-all duration-300"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <img 
          src={profilePic}
          alt="Hetansa Rajkotia" 
          className="w-full h-full object-contain"
        />
        {/* Connecting Line */}
        <div className="hidden lg:block absolute left-1/2 bottom-0 w-[2px] h-24 md:h-32 lg:h-36 bg-black transform translate-y-full"></div>
      </motion.div>
    </div>
  );
}