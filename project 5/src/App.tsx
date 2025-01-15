import React, { useState, useEffect } from 'react';
import { 
  Paintbrush, 
  Hammer, 
  PhoneCall, 
  Mail, 
  Clock, 
  CheckCircle2,
  ArrowRight,
  Star,
  Building2,
  Users,
  Target,
  Award,
  Menu,
  X,
  Home
} from 'lucide-react';

function AboutPage() {
  return (
    <div className="pt-20 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/4cc74bc5-cd2c-4b5a-a482-8d166203057d.JPG" 
                alt="JM Home Decor Logo" 
                className="h-16 w-16 object-contain"
              />
              <h1 className="text-4xl font-bold">About JM Home Decor</h1>
            </div>
            <div className="space-y-6">
              <p className="text-gray-600">
                Welcome to JM Home Decor, where craftsmanship meets vision. Founded by Mauricio Oliveira, our company has established itself as a premier provider of high-quality construction and home renovation services.
              </p>
              <p className="text-gray-600">
                With years of experience in the construction industry, Mauricio brings a unique blend of technical expertise and creative vision to every project. His passion for building dream homes is evident in the meticulous attention to detail and commitment to excellence that defines our work.
              </p>
              <div className="flex items-center space-x-4 text-amber-600">
                <Award className="h-8 w-8" />
                <p className="font-semibold">Excellence in Every Detail</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80" 
              alt="Luxury Interior Design"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <Target className="h-8 w-8 text-amber-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To create exceptional living spaces that perfectly align with our clients' visions while maintaining the highest standards of quality and craftsmanship.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <Building2 className="h-8 w-8 text-amber-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Our Expertise</h3>
            <p className="text-gray-600">
              From complete home renovations to custom builds, we bring innovation and expertise to every project, ensuring lasting quality and satisfaction.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <Users className="h-8 w-8 text-amber-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Client Focus</h3>
            <p className="text-gray-600">
              We value our relationships with clients, working closely with them throughout the process to turn their dreams into reality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    setShowAbout(false);
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleMobileNavigation = (action: () => void) => {
    action();
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg py-2' 
          : 'bg-gray-900/90 backdrop-blur-sm py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/4cc74bc5-cd2c-4b5a-a482-8d166203057d.JPG" 
                alt="JM Home Decor Logo" 
                className="h-8 w-8 object-contain"
              />
              <span className={`text-2xl font-bold ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}>JM Home Decor</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <button 
                onClick={() => setShowAbout(false)} 
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-900 hover:bg-amber-50 hover:text-amber-600' 
                    : 'text-gray-100 hover:bg-white/10 hover:text-white'
                }`}
              >
                Home
              </button>
              <button 
                onClick={() => setShowAbout(true)} 
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  isScrolled 
                    ? 'text-gray-900 hover:bg-amber-50 hover:text-amber-600' 
                    : 'text-gray-100 hover:bg-white/10 hover:text-white'
                }`}
              >
                About
              </button>
              <button 
                onClick={scrollToContact}
                className={`ml-2 px-6 py-2 rounded-md font-medium transition-all duration-300 ${
                  isScrolled 
                    ? 'bg-amber-600 text-white hover:bg-amber-700' 
                    : 'bg-amber-500 text-white hover:bg-amber-400'
                }`}
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-2">
                <button
                  onClick={() => handleMobileNavigation(() => setShowAbout(false))}
                  className={`px-4 py-2 rounded-md text-left transition-all duration-300 ${
                    isScrolled
                      ? 'text-gray-900 hover:bg-amber-50 hover:text-amber-600'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => handleMobileNavigation(() => setShowAbout(true))}
                  className={`px-4 py-2 rounded-md text-left transition-all duration-300 ${
                    isScrolled
                      ? 'text-gray-900 hover:bg-amber-50 hover:text-amber-600'
                      : 'text-white hover:bg-white/10'
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => handleMobileNavigation(scrollToContact)}
                  className={`px-4 py-2 rounded-md text-left font-medium transition-all duration-300 ${
                    isScrolled
                      ? 'bg-amber-600 text-white hover:bg-amber-700'
                      : 'bg-amber-500 text-white hover:bg-amber-400'
                  }`}
                >
                  Contact
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {showAbout ? (
        <AboutPage />
      ) : (
        <>
          {/* Hero Section */}
          <div className="relative h-screen">
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80"
                className="w-full h-full object-cover"
                alt="Luxury Interior"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Transform Your Space Into a Masterpiece</h1>
                <p className="text-xl mb-8">Luxury home renovations and interior design solutions tailored to your vision</p>
                <button 
                  onClick={scrollToContact}
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center group"
                >
                  Get Started
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-4xl font-bold text-center mb-16">Our Premium Services</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Paintbrush className="h-8 w-8 text-amber-600" />,
                    title: "Interior Design",
                    description: "Bespoke design solutions that blend aesthetics with functionality"
                  },
                  {
                    icon: <Hammer className="h-8 w-8 text-amber-600" />,
                    title: "Custom Renovations",
                    description: "Complete home transformations with premium materials and craftsmanship"
                  },
                  {
                    icon: <Home className="h-8 w-8 text-amber-600" />,
                    title: "Architectural Planning",
                    description: "Expert space planning and architectural design services"
                  }
                ].map((service, index) => (
                  <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    {service.icon}
                    <h3 className="text-xl font-bold mt-4 mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <h2 className="text-4xl font-bold mb-8">Let's Discuss Your Project</h2>
                  <p className="text-gray-600 mb-8">Transform your space with Mauricio Oliveira and our expert team. Contact us today for a consultation.</p>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <PhoneCall className="h-6 w-6 text-amber-600" />
                      <span>407 729-5446</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Mail className="h-6 w-6 text-amber-600" />
                      <span>jmhomedecor7@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Clock className="h-6 w-6 text-amber-600" />
                      <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
                <form className="space-y-6">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Your Email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Your Message" 
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-1 focus:ring-amber-600 outline-none transition"
                    ></textarea>
                  </div>
                  <button className="w-full bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <img 
                      src="/4cc74bc5-cd2c-4b5a-a482-8d166203057d.JPG" 
                      alt="JM Home Decor Logo" 
                      className="h-8 w-8 object-contain"
                    />
                    <span className="text-xl font-bold">JM Home Decor</span>
                  </div>
                  <p className="text-gray-400">Transforming spaces into extraordinary homes since 2010.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Services</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>Interior Design</li>
                    <li>Custom Renovations</li>
                    <li>Architectural Planning</li>
                    <li>Project Management</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Company</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>About Us</li>
                    <li>Our Team</li>
                    <li>Testimonials</li>
                    <li>Contact</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-amber-600 transition">Instagram</a>
                    <a href="#" className="text-gray-400 hover:text-amber-600 transition">Facebook</a>
                    <a href="#" className="text-gray-400 hover:text-amber-600 transition">LinkedIn</a>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                <p>&copy; 2024 JM Home Decor. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;