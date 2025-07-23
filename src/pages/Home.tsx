import React from 'react';
import { Coffee, DollarSign, Users, Clock, Zap } from 'lucide-react';
import vendingVideo from '../videos/vending1.mp4';

const Home = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Generate Passive Income',
      description: 'Earn revenue from every sale while we handle restocking and maintenance.',
      image: 'https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Users,
      title: 'Improve Customer Satisfaction',
      description: 'Provide convenient access to snacks and beverages for customers and employees.',
      image: 'https://images.pexels.com/photos/7413915/pexels-photo-7413915.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Clock,
      title: 'Zero Time Investment',
      description: 'We handle everything - installation, stocking, maintenance, and repairs.',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Professional installation with minimal disruption to your business operations.',
      image: 'https://images.pexels.com/photos/3184434/pexels-photo-3184434.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Free Consultation',
      description: 'We assess your location and recommend the best vending solution.',
      image: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      step: 2,
      title: 'Professional Installation',
      description: 'Our team installs and sets up your vending machine at no cost.',
      image: 'https://images.pexels.com/photos/5475751/pexels-photo-5475751.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      step: 3,
      title: 'We Handle Everything',
      description: 'Regular restocking, maintenance, and customer service are all included.',
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      step: 4,
      title: 'Collect Your Revenue',
      description: 'Receive monthly profit sharing from all vending machine sales.',
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-[#BDD4EA] to-[#F2B705] py-20 overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#002D4C] mb-6">
                Free Vending Machines for Your Business
              </h1>
              <p className="text-xl text-[#002D4C] mb-8">
                Generate passive income, improve customer satisfaction, and enhance your business 
                with our professional vending machine services. No upfront costs, no maintenance hassles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-[#002D4C] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#064789] transition duration-200 text-center"
                >
                  Get a Free Machine
                </a>
                <a
                  href="/about"
                  className="border border-[#002D4C] text-[#002D4C] px-8 py-3 rounded-lg font-semibold hover:bg-[#BDD4EA] transition duration-200 text-center"
                >
                  Learn About Us
                </a>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover rounded-lg"
              >
                <source
                  src={vendingVideo}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D4C] mb-4">
              Why Add a Vending Machine to Your Business?
            </h2>
            <p className="text-xl text-[#064789] max-w-3xl mx-auto">
              Our vending machines provide value to your business while generating additional revenue streams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="relative text-center p-6 rounded-lg hover:shadow-lg transition duration-200 overflow-hidden group">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                  style={{
                    backgroundImage: `url(${benefit.image})`,
                  }}
                />
                
                <div className="relative z-10">
                  <div className="bg-[#BDD4EA] p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-8 w-8 text-[#002D4C]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#002D4C] mb-3">{benefit.title}</h3>
                  <p className="text-[#064789]">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FFF4D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D4C] mb-4">
              How It Works
            </h2>
            <p className="text-xl text-[#064789]">
              Getting started is simple and completely free
            </p>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <div key={index} className="relative text-center">
                  <div className="mb-6 relative flex justify-center">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-20 h-20 object-cover rounded-full shadow-lg border-4 border-white relative z-10"
                    />
                    
                  </div>
                  
                  <h3 className="text-xl font-semibold text-[#002D4C] mb-3">{step.title}</h3>
                  <p className="text-[#064789]">{step.description}</p>
                </div>
              ))}
            </div>
            
            <div className="hidden lg:block absolute top-10 left-0 right-0">
              <div className="flex justify-between items-center mx-auto" style={{width: 'calc(100% - 160px)', marginLeft: '80px', marginRight: '80px'}}>
                <div className="h-0.5 bg-[#BDD4EA] flex-1"></div>
                <div className="w-8"></div>
                <div className="h-0.5 bg-[#BDD4EA] flex-1"></div>
                <div className="w-8"></div>
                <div className="h-0.5 bg-[#BDD4EA] flex-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D4C] mb-4">
              Complete Business Solutions
            </h2>
            <p className="text-xl text-[#064789]">
              We offer more than just vending machines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#E6F0FA] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              {/* Service Image */}
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: 'url(https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=800)'
              }}>
                <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6">
                    <div className="bg-[#BDD4EA] p-2 rounded-lg inline-block mb-2">
                      <DollarSign className="h-6 w-6 text-[#002D4C]" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#002D4C] mb-3">
                  Cash Discount Processing
                </h3>
                <p className="text-[#064789] mb-4">
                  Save money on credit card processing fees while offering customers 
                  the choice to pay with cash and receive a discount.
                </p>
                <a
                  href="/cash-discount"
                  className="text-[#002D4C] font-semibold hover:text-[#064789] transition duration-200"
                >
                  Learn More →
                </a>
              </div>
            </div>

            <div className="bg-[#FFF4D0] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <div className="h-48 bg-cover bg-center" style={{
                backgroundImage: 'url(https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800)'
              }}>
                <div className="h-full bg-gradient-to-t from-black/50 to-transparent flex items-end">
                  <div className="p-6">
                    <div className="bg-[#F2B705] p-2 rounded-lg inline-block mb-2">
                      <Coffee className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-semibold text-[#002D4C] mb-3">
                  ATM Placement
                </h3>
                <p className="text-[#064789] mb-4">
                  Generate additional revenue by hosting an ATM at your location. 
                  We handle installation, maintenance, and cash management.
                </p>
                <a
                  href="/atm-placement"
                  className="text-[#002D4C] font-semibold hover:text-[#064789] transition duration-200"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      
      <section id="contact" className="relative py-20 overflow-hidden">
       
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3182795/pexels-photo-3182795.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#BDD4EA]/90 to-[#E6F0FA]/90" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002D4C] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[#064789] mb-8">
            Contact us today for a free consultation and site evaluation
          </p>
          
          <div className="bg-white/95 backdrop-blur-sm rounded-lg p-8 max-w-md mx-auto shadow-xl">
            <div className="space-y-4">
              <div className="text-left">
                <div className="block text-sm font-medium text-gray-700 mb-1">
                  Business Name
                </div>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#064789] focus:border-[#064789]"
                  placeholder="Your Business Name"
                />
              </div>
              <div className="text-left">
                <div className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </div>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#064789] focus:border-[#064789]"
                  placeholder="your@email.com"
                />
              </div>
              <div className="text-left">
                <div className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </div>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#064789] focus:border-[#064789]"
                  placeholder="(555) 123-4567"
                />
              </div>
              <button
                type="button"
                className="w-full bg-[#002D4C] text-white py-3 rounded-lg font-semibold hover:bg-[#E6A604] transition duration-200"
              >
                Book a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;