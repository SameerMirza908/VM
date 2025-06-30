import React from 'react';
import { DollarSign, MapPin, Wrench, TrendingUp, Users, Shield, Clock, CheckCircle } from 'lucide-react';

const ATMPlacement = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: 'Generate Extra Revenue',
      description: 'Earn money from every ATM transaction with no effort on your part.'
    },
    {
      icon: Users,
      title: 'Increase Customer Traffic',
      description: 'ATMs draw customers to your location, increasing foot traffic and sales.'
    },
    {
      icon: Shield,
      title: 'No Liability or Risk',
      description: 'We handle all insurance, security, and compliance requirements.'
    },
    {
      icon: Clock,
      title: 'Hassle-Free Operation',
      description: 'We manage cash loading, maintenance, and customer service calls.'
    }
  ];

  const process = [
    {
      step:1,
      title: 'Site Evaluation',
      description: 'We assess your location to determine ATM viability and optimal placement.',
      icon: MapPin
    },
    {
      step: 2,
      title: 'Free Installation',
      description: 'Professional installation with all necessary electrical and communication setup.',
      icon: Wrench
    },
    {
      step: 3,
      title: 'Cash Management',
      description: 'We handle all cash loading, monitoring, and maintenance automatically.',
      icon: Shield
    },
    {
      step: 4,
      title: 'Collect Revenue',
      description: 'Receive monthly revenue sharing from all ATM transactions at your location.',
      icon: TrendingUp
    }
  ];

  const locationTypes = [
    { type: 'Convenience Stores', transactions: '800-1200/month', revenue: '$240-360' },
    { type: 'Restaurants & Bars', transactions: '400-800/month', revenue: '$120-240' },
    { type: 'Gas Stations', transactions: '600-1000/month', revenue: '$180-300' },
    { type: 'Retail Stores', transactions: '300-600/month', revenue: '$90-180' },
    { type: 'Hotels & Motels', transactions: '500-900/month', revenue: '$150-270' },
    { type: 'Entertainment Venues', transactions: '700-1100/month', revenue: '$210-330' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-50 to-red-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Host an ATM at Your Business
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Generate additional passive income while providing convenient cash access to your customers. 
                We handle everything - installation, maintenance, cash management, and security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition duration-200 text-center"
                >
                  Place an ATM Today
                </a>
                <a
                  href="#revenue"
                  className="border border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition duration-200 text-center"
                >
                  View Revenue Potential
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6956275/pexels-photo-6956275.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modern ATM machine"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Host an ATM?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ATMs provide value to your customers while generating additional revenue for your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition duration-200">
                <div className="bg-orange-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How ATM Placement Works
            </h2>
            <p className="text-xl text-gray-600">
              A simple process with no upfront costs or ongoing responsibilities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative bg-white p-6 rounded-lg shadow-sm">
                <div className="text-center">
                  <div className="bg-orange-600 text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.step}
                  </div>
                  <div className="bg-orange-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="bg-orange-200 h-0.5 w-8"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Potential */}
      <section id="revenue" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Revenue Potential by Business Type
            </h2>
            <p className="text-xl text-gray-600">
              See what businesses like yours typically earn from ATM hosting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locationTypes.map((location, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border hover:shadow-md transition duration-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{location.type}</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Transactions:</span>
                    <span className="font-semibold">{location.transactions}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Revenue:</span>
                    <span className="font-bold text-orange-600">${location.revenue}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-orange-50 p-8 rounded-lg">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Revenue Sharing Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">$3.00</div>
                  <p className="text-gray-600">Average transaction fee</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">50%</div>
                  <p className="text-gray-600">Your revenue share</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">$1.50</div>
                  <p className="text-gray-600">Your earning per transaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Location Requirements
            </h2>
            <p className="text-xl text-gray-600">
              Simple requirements to qualify for ATM placement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Required</h3>
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
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Ideal Locations</h3>
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
                    <TrendingUp className="h-6 w-6 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{ideal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Host an ATM?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get a free site evaluation and revenue estimate
          </p>
          
          <div className="bg-white rounded-lg p-8 max-w-md mx-auto">
            <form className="space-y-4">
              <div className="text-left">
                <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-1">
                  Business Name
                </label>
                <input
                  type="text"
                  id="business"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="Your Business Name"
                />
              </div>
              <div className="text-left">
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                  Business Type
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
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
                <label htmlFor="traffic" className="block text-sm font-medium text-gray-700 mb-1">
                  Daily Customer Traffic
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                  <option>Select Range</option>
                  <option>50-100 customers/day</option>
                  <option>100-200 customers/day</option>
                  <option>200-500 customers/day</option>
                  <option>500+ customers/day</option>
                </select>
              </div>
              <div className="text-left">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  placeholder="your@email.com"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition duration-200"
              >
                Request Site Evaluation
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ATMPlacement;