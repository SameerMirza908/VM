import React from 'react';
import { Heart, Users, Handshake, Award, Target, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Family Values',
      description: 'Teaching our children honest business practices while serving our community with integrity.'
    },
    {
      icon: Handshake,
      title: 'Trust & Reliability',
      description: 'We build lasting partnerships through consistent service and transparent communication.'
    },
    {
      icon: Target,
      title: 'Simple Business Model',
      description: 'Buy quality products, sell them at fair prices, and provide exceptional service.'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Supporting local businesses and contributing to the economic growth of our community.'
    }
  ];

  const milestones = [
    { year: '2020', event: 'Started with our first vending machine route' },
    { year: '2021', event: 'Added credit card processing services' },
    { year: '2022', event: 'Expanded to ATM placement services' },
    { year: '2023', event: 'Serving 50+ local businesses' },
    { year: '2024', event: 'Teaching kids the value of entrepreneurship' },
    { year: '2025', event: 'Continuing to grow and serve our community' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                A Family Business Built on Trust
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                We started FamilyVend to teach our children the value of honest work, 
                fair business practices, and serving our community. What began as a simple 
                vending machine route has grown into a comprehensive business solution provider.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Our Mission</p>
                  <p className="text-gray-600">Helping businesses thrive while teaching timeless values</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Family business meeting"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Teaching kids business fundamentals through real-world experience
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  The Beginning
                </h3>
                <p className="text-gray-600">
                  It started as a way to teach our kids about entrepreneurship. We bought our first 
                  vending machine and showed them the basics: buy products at wholesale, stock the machine, 
                  and sell them at retail prices. The profit margin teaches the value of hard work and smart business.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Growing the Business
                </h3>
                <p className="text-gray-600">
                  As we helped more businesses with vending solutions, we discovered other needs. 
                  Many business owners were struggling with high credit card processing fees and wanted 
                  additional revenue streams like ATM services.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Complete Solutions
                </h3>
                <p className="text-gray-600">
                  Today, we provide comprehensive business solutions while maintaining our family values. 
                  Our children are learning not just about profit, but about service, integrity, and 
                  building lasting relationships with the businesses we serve.
                </p>
              </div>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Family working together"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Family Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide our business and life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-200 text-center">
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From one vending machine to comprehensive business solutions
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center">
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 order-2'}`}>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-600 w-4 h-4 rounded-full border-4 border-white"></div>
                  
                  {index % 2 !== 0 && <div className="flex-1"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business Philosophy */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Our Business Philosophy
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-blue-700 p-6 rounded-lg">
              <div className="text-3xl font-bold text-white mb-2">1</div>
              <h3 className="text-xl font-semibold text-white mb-3">Buy Smart</h3>
              <p className="text-blue-100">Source quality products at competitive wholesale prices</p>
            </div>
            
            <div className="bg-blue-700 p-6 rounded-lg">
              <div className="text-3xl font-bold text-white mb-2">2</div>
              <h3 className="text-xl font-semibold text-white mb-3">Serve Well</h3>
              <p className="text-blue-100">Provide exceptional service and maintain our equipment</p>
            </div>
            
            <div className="bg-blue-700 p-6 rounded-lg">
              <div className="text-3xl font-bold text-white mb-2">3</div>
              <h3 className="text-xl font-semibold text-white mb-3">Share Success</h3>
              <p className="text-blue-100">Create win-win partnerships that benefit everyone</p>
            </div>
          </div>

          <blockquote className="text-xl text-blue-100 italic mb-8">
            "We're not just teaching our kids about business - we're showing them how to serve 
            others while building something meaningful together."
          </blockquote>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition duration-200"
            >
              Work With Our Family
            </a>
            <a
              href="/"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
            >
              View Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;