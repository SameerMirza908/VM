import React from 'react';
import { Coffee, CreditCard, DollarSign, ArrowRight, CheckCircle, Users, TrendingUp, Shield, MapPin, Zap, Clock, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Coffee,
      title: 'Vending Machine Services',
      description: 'Get a free vending machine for your business location. We handle installation, stocking, maintenance, and repairs while you earn passive income from every sale.',
      features: [
        'Free machine installation',
        'Regular restocking included',
        'All maintenance covered',
        'Revenue sharing program'
      ],
      link: '/vending-services',
      linkText: 'Learn More About Vending',
      color: 'primary',
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: CreditCard,
      title: 'Cash Discount Processing',
      description: 'Stop paying credit card processing fees. Our cash discount program lets customers who pay with cards cover the processing fees while cash customers get a discount.',
      features: [
        'Eliminate processing fees',
        'Increase cash payments',
        'Fully compliant system',
        'Transparent pricing'
      ],
      link: '/cash-discount',
      linkText: 'Learn More About Cash Discount',
      color: 'secondary',
      image: 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: DollarSign,
      title: 'ATM Placement',
      description: 'Host an ATM at your business location to generate additional passive income. We handle installation, cash management, maintenance, and security.',
      features: [
        'Generate extra revenue',
        'Increase customer traffic',
        'No liability or risk',
        'Hassle-free operation'
      ],
      link: '/atm-placement',
      linkText: 'Learn More About ATM Placement',
      color: 'accent',
      image: 'https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
     
      <section className="relative py-[150px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#BDD4EA]/90 to-[#F2B705]/90" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#002D4C] mb-4">
              Complete Business Solutions
            </h1>
            <p className="text-lg text-[#002D4C] max-w-4xl mx-auto mb-6 leading-relaxed">
              We provide comprehensive services to help your business generate additional revenue streams 
              while improving customer satisfaction. All our services are designed to be hassle-free with 
              no upfront costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="#services"
                className="bg-[#002D4C] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#064789] transition duration-200 text-center"
              >
                Explore Our Services
              </a>
              <a
                href="#contact"
                className="border border-[#002D4C] text-[#002D4C] px-6 py-2.5 rounded-lg font-semibold hover:bg-[#BDD4EA] transition duration-200 text-center"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D4C] mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-[#064789] max-w-4xl mx-auto">
              We specialize in revenue-generating solutions that require no upfront investment from you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative text-center p-6 rounded-lg hover:shadow-lg transition duration-200 overflow-hidden group">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=600)',
                }}
              />
              <div className="relative z-10">
                <div className="bg-[#BDD4EA] p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-[#002D4C]" />
                </div>
                <h3 className="text-xl font-semibold text-[#002D4C] mb-3">No Upfront Costs</h3>
                <p className="text-[#064789]">
                  All our services require zero initial investment. We handle installation, setup, and equipment.
                </p>
              </div>
            </div>

            <div className="relative text-center p-6 rounded-lg hover:shadow-lg transition duration-200 overflow-hidden group">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=600)',
                }}
              />
              <div className="relative z-10">
                <div className="bg-[#BDD4EA] p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-[#002D4C]" />
                </div>
                <h3 className="text-xl font-semibold text-[#002D4C] mb-3">Generate Revenue</h3>
                <p className="text-[#064789]">
                  Turn your business location into additional income streams with our proven solutions.
                </p>
              </div>
            </div>

            <div className="relative text-center p-6 rounded-lg hover:shadow-lg transition duration-200 overflow-hidden group">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-300"
                style={{
                  backgroundImage: 'url(https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600)',
                }}
              />
              <div className="relative z-10">
                <div className="bg-[#BDD4EA] p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-[#002D4C]" />
                </div>
                <h3 className="text-xl font-semibold text-[#002D4C] mb-3">Full Service Support</h3>
                <p className="text-[#064789]">
                  We handle all maintenance, restocking, and customer service so you can focus on your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-[#FFF4D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D4C] mb-4">
              Our Services
            </h2>
            <p className="text-xl text-[#064789]">
              Choose from our comprehensive range of business solutions
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition duration-300 border border-[#BDD4EA]">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                    <div className={isEven ? 'order-1' : 'order-2 lg:order-1'}>
                      <div className="flex items-center mb-4">
                        <div className="bg-[#002D4C] p-3 rounded-full mr-4">
                          <service.icon className="h-6 w-6 text-[#F2B705]" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#002D4C]">
                          {service.title}
                        </h3>
                      </div>
                      
                      <p className="text-lg text-[#064789] mb-6 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="space-y-3 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center">
                            <CheckCircle className="h-5 w-5 text-[#002D4C] mr-3 flex-shrink-0" />
                            <span className="text-[#064789] font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <a
                        href={service.link}
                        className="inline-flex items-center bg-[#002D4C] hover:bg-[#064789] text-white px-6 py-3 rounded-lg font-semibold transition duration-200 group"
                      >
                        {service.linkText}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                      </a>
                    </div>

                    <div className={`${isEven ? 'order-2' : 'order-1 lg:order-2'} relative`}>
                      <div className="relative rounded-xl overflow-hidden shadow-2xl">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-64 md:h-72 object-cover transform hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-4 h-full">
            <div 
              className="bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400)',
              }}
            />
            <div 
              className="bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=400)',
              }}
            />
            <div 
              className="bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400)',
              }}
            />
            <div 
              className="bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/3182795/pexels-photo-3182795.jpeg?auto=compress&cs=tinysrgb&w=400)',
              }}
            />
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D4C] mb-4">
              Why Businesses Choose Us
            </h2>
            <p className="text-xl text-[#064789]">
              We're committed to your success with proven results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-200 bg-white/80 backdrop-blur-sm">
              <div className="bg-[#BDD4EA] p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-[#002D4C]" />
              </div>
              <p className="text-[#064789] font-semibold">Local Accountability</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-200 bg-white/80 backdrop-blur-sm">
              <div className="bg-[#BDD4EA] p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-[#002D4C]" />
              </div>
              <p className="text-[#064789] font-semibold">Fast, Responsive Service</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-200 bg-white/80 backdrop-blur-sm">
              <div className="bg-[#BDD4EA] p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-[#002D4C]" />
              </div>
              <p className="text-[#064789] font-semibold">24/7 Support Available</p>
            </div>
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-200 bg-white/80 backdrop-blur-sm">
              <div className="bg-[#BDD4EA] p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#002D4C]" />
              </div>
              <p className="text-[#064789] font-semibold">100% Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#BDD4EA]/90 to-[#E6F0FA]/90" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002D4C] mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-[#064789] mb-8">
            Contact us today to learn how our services can benefit your business
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
                  Interested Service
                </div>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#064789] focus:border-[#064789]">
                  <option>Select a Service</option>
                  <option>Vending Machine Services</option>
                  <option>Cash Discount Processing</option>
                  <option>ATM Placement</option>
                  <option>All Services</option>
                </select>
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

export default Services;