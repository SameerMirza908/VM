import React from 'react';
import { Link } from 'react-router-dom';
import { Coffee, DollarSign, Users, Clock, Zap } from 'lucide-react';
import vendingVideo from '../videos/vending1.mp4';

const Home = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Generate Passive Income',
      description: 'Earn revenue from every sale while we handle restocking and maintenance.'
    },
    {
      icon: Users,
      title: 'Improve Customer Satisfaction',
      description: 'Provide convenient access to snacks and beverages for customers and employees.'
    },
    {
      icon: Clock,
      title: 'Zero Time Investment',
      description: 'We handle everything - installation, stocking, maintenance, and repairs.'
    },
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Professional installation with minimal disruption to your business operations.'
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Free Consultation',
      description: 'We assess your location and recommend the best vending solution.'
    },
    {
      step: 2,
      title: 'Professional Installation',
      description: 'Our team installs and sets up your vending machine at no cost.'
    },
    {
      step: 3,
      title: 'We Handle Everything',
      description: 'Regular restocking, maintenance, and customer service are all included.'
    },
    {
      step: 4,
      title: 'Collect Your Revenue',
      description: 'Receive monthly profit sharing from all vending machine sales.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#BDD4EA] to-[#F2B705] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <Link
                  to="/about"
                  className="border border-[#002D4C] text-[#002D4C] px-8 py-3 rounded-lg font-semibold hover:bg-[#BDD4EA] transition duration-200 text-center"
                >
                  Learn About Us
                </Link>
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

      {/* Benefits Section */}
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
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition duration-200">
                <div className="bg-[#BDD4EA] p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-[#002D4C]" />
                </div>
                <h3 className="text-xl font-semibold text-[#002D4C] mb-3">{benefit.title}</h3>
                <p className="text-[#064789]">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="bg-[#002D4C] text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-[#002D4C] mb-3">{step.title}</h3>
                  <p className="text-[#064789]">{step.description}</p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full">
                    <div className="h-0.5 bg-[#BDD4EA] w-3/4"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services Preview */}
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
            <div className="bg-[#E6F0FA] p-8 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-[#BDD4EA] p-3 rounded-lg">
                  <DollarSign className="h-8 w-8 text-[#002D4C]" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#002D4C] mb-3">
                    Cash Discount Processing
                  </h3>
                  <p className="text-[#064789] mb-4">
                    Save money on credit card processing fees while offering customers 
                    the choice to pay with cash and receive a discount.
                  </p>
                  <Link
                    to="/cash-discount"
                    className="text-[#002D4C] font-semibold hover:text-[#064789] transition duration-200"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-[#FFF4D0] p-8 rounded-lg">
              <div className="flex items-start space-x-4">
                <div className="bg-[#F2B705] p-3 rounded-lg">
                  <Coffee className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-[#002D4C] mb-3">
                    ATM Placement
                  </h3>
                  <p className="text-[#064789] mb-4">
                    Generate additional revenue by hosting an ATM at your location. 
                    We handle installation, maintenance, and cash management.
                  </p>
                  <Link
                    to="/atm-placement"
                    className="text-[#002D4C] font-semibold hover:text-[#064789] transition duration-200"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[#BDD4EA] to-[#E6F0FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002D4C] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[#064789] mb-8">
            Contact us today for a free consultation and site evaluation
          </p>
          
          <div className="bg-white rounded-lg p-8 max-w-md mx-auto">
            <form className="space-y-4">
              <div className="text-left">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Business Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#064789] focus:border-[#064789]"
                  placeholder="Your Business Name"
                />
              </div>
              <div className="text-left">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#064789] focus:border-[#064789]"
                  placeholder="your@email.com"
                />
              </div>
              <div className="text-left">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#064789] focus:border-[#064789]"
                  placeholder="(555) 123-4567"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#002D4C] text-white py-3 rounded-lg font-semibold hover:bg-[#E6A604] transition duration-200"
              >
                Book a Free Consultation
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;