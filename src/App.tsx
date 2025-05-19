import { useState } from 'react'
import './App.css'
import HeroSection from './components/Hero'
import ServicesSection from './components/Services'
import FilmmakingCardWithContent from './components/Card'
import WhyHireMeSection from './components/Why'
import Footer from './components/Footer'
import ProjectCarousel from './components/Projects'
import TestimonialCarousel from './components/Testimonial'
import ContactFormWithTicker from './components/Contact'
import ResumeTimeline from './components/Timeline'
import ServiceCard from './components/Card'
import BlogPostSection from './components/Blog'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className=''>
    <HeroSection/>
    <ServicesSection/>
    <ResumeTimeline/>
    <WhyHireMeSection/>
    <ProjectCarousel/>
    <TestimonialCarousel/>
    <ContactFormWithTicker/>
    <BlogPostSection/>
    <Footer/>
  </div>
  )
}

export default App
