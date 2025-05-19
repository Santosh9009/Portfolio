import { useState } from "react";
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

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white h-screen">
      {/* Sidebar */}
      <div className="w-full lg:w-80 bg-white p-6 flex flex-col items-center lg:items-center py-24 relative">
        {/* Logo - visible only on desktop */}
        <div className="mb-12 hidden lg:block">
          <img 
            src={HRLogo} 
            alt="HR Logo" 
            className="h-24 w-24 object-contain"
          />
        </div>

        {/* Mobile menu toggle */}
        <button 
          className="lg:hidden fixed top-6 right-6 z-50 bg-white rounded-full p-2 shadow-md text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>

        {/* Navigation */}
        <nav className={`
          ${isMenuOpen ? 'flex fixed inset-0 bg-white z-40' : 'hidden'} 
          lg:flex lg:relative lg:inset-auto 
          flex-col items-center w-full 
          font-bold text-2xl lg:text-2xl
          transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'pt-16' : 'pt-0'}
        `}>
          {/* Logo in mobile menu */}
          <div className={`lg:hidden mb-12 z-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <img 
              src={HRLogo} 
              alt="HR Logo" 
              className="h-24 w-24 object-contain"
            />
          </div>
          
          <div className="flex flex-col items-center space-y-8">
            <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">About Me</a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Portfolio</a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Testimonials</a>
            <a href="#" className="text-gray-700 hover:text-pink-500 transition-colors">Blog</a>
          </div>
        </nav>
      </div>

      <div className="flex-1 flex flex-col bg-white relative pt-24 md:pt-0">
        {/* Profile Image - Mobile */}
        <div className={`md:hidden absolute left-1/2 transform -translate-x-1/2 -top-28 w-64 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0 z-0' : 'opacity-100 z-50'}`}>
          <img 
            src={profilePic}
            alt="Hetansa Rajkotia" 
            className="w-full h-full object-contain"
          />
        </div>

        {/* Main Content with Purple Background */}
        <div className="bg-[linear-gradient(145deg,#673AB7_10%,#252124_50%)] relative overflow-hidden rounded-b-[1.5rem] sm:rounded-b-[2rem] md:rounded-b-[3rem] mt-32 md:mt-0">
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0" 
            style={{
              backgroundImage: `url(${backgroundPic})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: '0.3'
            }}
          />

          <div className="px-6 py-16 sm:p-12 md:p-16 text-white z-10 relative min-h-[450px] md:min-h-[600px] flex flex-col justify-center">
            <div className="w-full md:max-w-3xl mx-auto md:ml-16 md:mx-0 relative z-10">
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-light mb-3">Hello!</h2>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">I am Hetansa Rajkotia</h1>
              <p className="text-base sm:text-lg opacity-90 leading-relaxed mb-8 pr-4">
                A filmmaker, visual effects artist, and editor crafting stories through the lens of 
                creativity and innovation. With a deep passion for cinematic storytelling, I bring 
                narratives to life through visuals that inspire, engage, and leave a lasting impact.
              </p>

              {/* Social Icons */}
              <div className="flex items-center justify-center md:justify-start space-x-6 md:space-x-8">
                <a href="#" className="text-white hover:text-pink-400 transition-all duration-300 transform hover:scale-110">
                  <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8" />
                </a>
                <a href="#" className="text-white hover:text-pink-400 transition-all duration-300 transform hover:scale-110">
                  <img src={youtubeIcon} alt="YouTube" className="w-8 h-8" />
                </a>
                <a href="#" className="text-white hover:text-pink-400 transition-all duration-300 transform hover:scale-110">
                  <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
                </a>
                <a href="#" className="text-white hover:text-pink-400 transition-all duration-300 transform hover:scale-110">
                  <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Section - Outside Purple Background */}
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center  gap-12 py-16 px-6 bg-white">
          <img 
            src={award1}
            alt="The Women's Bioscope Award" 
            className="w-48 md:w-auto md:h-40 object-contain transform hover:scale-105 transition-all duration-300"
          />
          <img 
            src={award2}
            alt="Ahmedabad International Film Festival" 
            className="w-48 md:w-auto md:h-40 object-contain transform hover:scale-105 transition-all duration-300"
          />
          <img 
            src={award3}
            alt="Jagran Film Festival" 
            className="w-48 md:w-auto md:h-40 object-contain transform hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
      {/* Profile Image */}
      {/* Profile Image - Desktop with connecting line */}
      <div className="hidden md:block absolute right-8 lg:right-16 xl:right-36 bottom-24 md:bottom-28 lg:bottom-36 w-64 md:w-72 lg:w-80 xl:w-96 h-auto z-50">
        <img 
          src={profilePic}
          alt="Hetansa Rajkotia" 
          className="w-full h-full object-contain transition-all duration-300 hover:scale-105"
        />
        {/* Connecting Line */}
        <div className="hidden lg:absolute left-1/2 bottom-0 w-[2px] h-36 bg-black transform translate-y-full"></div>
      </div>

      <div></div>
    </div>
  );
}