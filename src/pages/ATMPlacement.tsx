import React from 'react';
import { DollarSign, MapPin, Wrench, TrendingUp, Users, Shield, Clock, CheckCircle } from 'lucide-react';

const ATMPlacement = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Generate Extra Revenue',
      description: 'Earn money from every ATM transaction with no effort on your part.',
      image: 'https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Users,
      title: 'Increase Customer Traffic',
      description: 'ATMs draw customers to your location, increasing foot traffic and sales.',
      image: 'https://images.pexels.com/photos/2292837/pexels-photo-2292837.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Shield,
      title: 'No Liability or Risk',
      description: 'We handle all insurance, security, and compliance requirements.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Clock,
      title: 'Hassle-Free Operation',
      description: 'We manage cash loading, maintenance, and customer service calls.',
      image: 'https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const process = [
    {
      step:1,
      title: 'Site Evaluation',
      description: 'We assess your location to determine ATM viability and optimal placement.',
      icon: MapPin,
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      step: 2,
      title: 'Free Installation',
      description: 'Professional installation with all necessary electrical and communication setup.',
      icon: Wrench,
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      step: 3,
      title: 'Cash Management',
      description: 'We handle all cash loading, monitoring, and maintenance automatically.',
      icon: Shield,
      image: 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      step: 4,
      title: 'Collect Revenue',
      description: 'Receive monthly revenue sharing from all ATM transactions at your location.',
      icon: TrendingUp,
      image: 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const locationTypes = [
    { type: 'Convenience Stores', transactions: '800-1200/month', revenue: '$240-360', image: 'https://images.pexels.com/photos/2292919/pexels-photo-2292919.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { type: 'Restaurants & Bars', transactions: '400-800/month', revenue: '$120-240', image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { type: 'Gas Stations', transactions: '600-1000/month', revenue: '$180-300', image: 'https://images.pexels.com/photos/2116475/pexels-photo-2116475.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { type: 'Retail Stores', transactions: '300-600/month', revenue: '$90-180', image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { type: 'Hotels & Motels', transactions: '500-900/month', revenue: '$150-270', image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=400' },
    { type: 'Entertainment Venues', transactions: '700-1100/month', revenue: '$210-330', image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400' }
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-[#BDD4EA] to-[#F2B705] py-12 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#002D4C] mb-4">
                Host an ATM at Your Business
              </h1>
              <p className="text-lg text-[#002D4C] mb-6">
                Generate additional passive income while providing convenient cash access to your customers. 
                We handle everything - installation, maintenance, cash management, and security.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="bg-[#002D4C] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#064789] transition duration-200 text-center"
                >
                  Place an ATM Today
                </a>
                <a
                  href="#revenue"
                  className="border border-[#002D4C] text-[#002D4C] px-6 py-2.5 rounded-lg font-semibold hover:bg-[#BDD4EA] transition duration-200 text-center"
                >
                  View Revenue Potential
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/259200/pexels-photo-259200.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern ATM machine"
                className="rounded-lg shadow-2xl max-h-80 w-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D4C] mb-4">
              Why Host an ATM?
            </h2>
            <p className="text-xl text-[#064789] max-w-3xl mx-auto">
              ATMs provide value to your customers while generating additional revenue for your business
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
              How ATM Placement Works
            </h2>
            <p className="text-xl text-[#064789]">
              A simple process with no upfront costs or ongoing responsibilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="mb-4">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
                
                <div className="text-center">
                  <div className="bg-[#002D4C] text-white text-lg font-bold w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="bg-[#BDD4EA] p-2 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-6 w-6 text-[#002D4C]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#002D4C] mb-3">{step.title}</h3>
                  <p className="text-[#064789]">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="bg-[#BDD4EA] h-0.5 w-8"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="revenue" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D4C] mb-4">
              Revenue Potential by Business Type
            </h2>
            <p className="text-xl text-[#064789]">
              See what businesses like yours typically earn from ATM hosting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationTypes.map((location, index) => (
              <div key={index} className="bg-[#E6F0FA] rounded-lg border border-[#BDD4EA] hover:shadow-lg transition duration-300 overflow-hidden">
                <img
                  src={location.image}
                  alt={location.type}
                  className="w-full h-40 object-cover"
                />
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#002D4C] mb-4">{location.type}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[#064789]">Monthly Transactions:</span>
                      <span className="font-semibold text-[#002D4C]">{location.transactions}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#064789]">Monthly Revenue:</span>
                      <span className="font-bold text-[#002D4C]">${location.revenue}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-[#FFF4D0] p-8 rounded-lg shadow-lg">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-[#002D4C] mb-4">
                Revenue Sharing Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-3xl font-bold text-[#002D4C] mb-2">$3.00</div>
                  <p className="text-[#064789]">Average transaction fee</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-3xl font-bold text-[#002D4C] mb-2">50%</div>
                  <p className="text-[#064789]">Your revenue share</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-3xl font-bold text-[#002D4C] mb-2">$1.50</div>
                  <p className="text-[#064789]">Your earning per transaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1068523/pexels-photo-1068523.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D4C] mb-4">
              Location Requirements
            </h2>
            <p className="text-xl text-[#064789]">
              Simple requirements to qualify for ATM placement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#002D4C] mb-6">Required</h3>
              <div className="space-y-4">
                {[
                  'Adequate foot traffic (minimum 100 customers/day)',
                  'Secure indoor location with good visibility',
                  'Standard electrical outlet (110V)',
                  'Phone line or internet connection',
                  'Business operating hours of at least 12 hours/day',
                  'Commitment to 3-year placement agreement'
                ].map((requirement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-[#002D4C] flex-shrink-0 mt-0.5" />
                    <span className="text-[#064789]">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#002D4C] mb-6">Ideal Locations</h3>
              <div className="space-y-4">
                {[
                  'High-traffic retail establishments',
                  'Cash-heavy businesses (bars, restaurants)',
                  'Areas with limited banking access',
                  'Tourist or entertainment districts',
                  'Industrial areas with workers',
                  'Strip malls and shopping centers'
                ].map((ideal, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <TrendingUp className="h-6 w-6 text-[#F2B705] flex-shrink-0 mt-0.5" />
                    <span className="text-[#064789]">{ideal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#BDD4EA]/90 to-[#E6F0FA]/90" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002D4C] mb-4">
            Ready to Host an ATM?
          </h2>
          <p className="text-xl text-[#064789] mb-8">
            Get a free site evaluation and revenue estimate
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
                  Business Type
                </div>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#064789] focus:border-[#064789]">
                  <option>Select Business Type</option>
                  <option>Convenience Store</option>
                  <option>Restaurant/Bar</option>
                  <option>Gas Station</option>
                  <option>Retail Store</option>
                  <option>Hotel/Motel</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="text-left">
                <div className="block text-sm font-medium text-gray-700 mb-1">
                  Daily Customer Traffic
                </div>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#064789] focus:border-[#064789]">
                  <option>Select Range</option>
                  <option>50-100 customers/day</option>
                  <option>100-200 customers/day</option>
                  <option>200-500 customers/day</option>
                  <option>500+ customers/day</option>
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
              <button
                type="button"
                className="w-full bg-[#002D4C] text-white py-3 rounded-lg font-semibold hover:bg-[#064789] transition duration-200"
              >
                Request Site Evaluation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ATMPlacement;