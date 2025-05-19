import { useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';
import Hrlogo from '../assets/footer/RLogoDark.svg';
import WhatsappIcon from '../assets/footer/whatsapp.svg';
import InstagramIcon from '../assets/footer/instagram.svg';
import LinkedinIcon from '../assets/footer/linkedinwhite.svg';
import YoutubeIcon from '../assets/footer/youtubewhite.svg';

export default function mkFooter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <footer className="bg-[#272727] text-white py-16 px-8 md:px-16 rounded-t-[3rem]">
      <div className="max-w-7xl mx-auto flex flex-col min-h-[420px]">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 md:mb-0">Lets Connect</h2>
          <button className="bg-gradient-to-r from-[#AB69B3] to-[#C7619C] hover:from-[#C7619C] hover:to-[#AB69B3] text-white px-8 py-3 rounded-full flex items-center gap-2 text-lg font-semibold shadow-lg">
            Resume <ArrowUpRight size={22} />
          </button>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          {/* Left Column - Logo and About */}
          <div>
            <div className="mb-4">
              <img className='w-16 h-16 object-cover' src={Hrlogo} alt="Logo" />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Creativity thrives in collaboration! Whether you need expert VFX, editing, or
              storytelling, let's bring your vision to life. Feel free to reach out, and let's create
              something extraordinary together
            </p>
            {/* Social Icons */}
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={WhatsappIcon} alt="WhatsApp" className="w-8 h-8 object-contain" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={InstagramIcon} alt="Instagram" className="w-8 h-8 object-contain" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={LinkedinIcon} alt="LinkedIn" className="w-8 h-8 object-contain" />
              </a>
              <a href="#" className="hover:opacity-80 transition-opacity">
                <img src={YoutubeIcon} alt="YouTube" className="w-8 h-8 object-contain" />
              </a>
            </div>
          </div>

          {/* Right Column - Navigation and Contact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Discover */}
            <div className="space-y-6">
              <h3 className="bg-gradient-to-r from-[#AB69B3] to-[#C7619C] bg-clip-text text-transparent text-xl font-medium mb-6">Discover</h3>
              <nav className="flex flex-col gap-4">
                <a href="#" className="bg-gradient-to-r from-[#AB69B3] to-[#C7619C] bg-clip-text text-transparent">Home</a>
                <a href="#" className="bg-gradient-to-r from-[#AB69B3] to-[#C7619C] bg-clip-text text-transparent">About Me</a>
                <a href="#" className="bg-gradient-to-r from-[#AB69B3] to-[#C7619C] bg-clip-text text-transparent">Portfolio</a>
                <a href="#" className="bg-gradient-to-r from-[#AB69B3] to-[#C7619C] bg-clip-text text-transparent">Testimonials</a>
                <a href="#" className="bg-gradient-to-r from-[#AB69B3] to-[#C7619C] bg-clip-text text-transparent">Blogs</a>
              </nav>
            </div>
            {/* Contact */}
            <div className="space-y-6">
              <h3 className="bg-gradient-to-r from-[#AB69B3] to-[#C7619C] bg-clip-text text-transparent text-xl font-medium mb-6">Contact</h3>
              <div className="mb-6">
                <a href="#" className="bg-gradient-to-r from-[#AB69B3] to-[#C7619C] bg-clip-text text-transparent">Portfolio-htn.com</a>
              </div>
            </div>
            {/* Lets talk! */}
            <div className="space-y-6">
              <h3 className="bg-gradient-to-r from-[#AB69B3] to-[#C7619C] bg-clip-text text-transparent text-xl font-medium mb-6">Lets talk!</h3>
              <form onSubmit={handleSubmit}>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full py-3 px-4 rounded-full text-gray-900 bg-white"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button 
                    type="submit" 
                    className="absolute right-0 top-0 bottom-0 bg-gradient-to-r from-[#AB69B3] to-[#C7619C] hover:from-[#C7619C] hover:to-[#AB69B3] rounded-full px-4 flex items-center justify-center text-white"
                  >
                    <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white">
          <div className="mb-4 md:mb-0">
            <p className="">Copyright© 2025 Hetansa. All Rights Reserved.</p>
          </div>
          <div>
            <a href="#" className="">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}