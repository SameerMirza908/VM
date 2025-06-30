import React from 'react';
import { CreditCard, DollarSign, TrendingDown, CheckCircle, Calculator } from 'lucide-react';

const CashDiscount = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'Eliminate Processing Fees',
      description: 'Customers paying with cards cover the processing fees, not you.'
    },
    {
      icon: DollarSign,
      title: 'Increase Cash Payments',
      description: 'Customers choose cash to avoid the service fee, improving your cash flow.'
    },
    {
      icon: Calculator,
      title: 'Transparent Pricing',
      description: 'Clear, upfront pricing with no hidden fees or long-term contracts.'
    },
    {
      icon: CheckCircle,
      title: 'Fully Compliant',
      description: 'Our system meets all legal requirements for cash discount programs.'
    }
  ];

  const savingsExample = [
    { volume: '$10,000', traditional: '$290', cashDiscount: '$50', savings: '$240' },
    { volume: '$25,000', traditional: '$725', cashDiscount: '$125', savings: '$600' },
    { volume: '$50,000', traditional: '$1,450', cashDiscount: '$250', savings: '$1,200' },
    { volume: '$100,000', traditional: '$2,900', cashDiscount: '$500', savings: '$2,400' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Stop Paying Credit Card Processing Fees
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                With our cash discount program, customers who pay with cards cover the processing fees. 
                Cash customers receive a discount. It's a win-win solution that can save your business thousands.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-200 text-center"
                >
                  Start Saving Today
                </a>
                <a
                  href="#calculator"
                  className="border border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition duration-200 text-center"
                >
                  Calculate Savings
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Credit card processing terminal"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How Cash Discount Processing Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple system that saves you money while offering customers choice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="block w-6 h-6 bg-green-600 rounded-full text-white text-sm flex items-center justify-center font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Customer Makes Purchase
                    </h3>
                    <p className="text-gray-600">
                      Items are priced at the cash discount price by default.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="block w-6 h-6 bg-green-600 rounded-full text-white text-sm flex items-center justify-center font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Payment Method Selected
                    </h3>
                    <p className="text-gray-600">
                      Cash customers pay the posted price. Card customers pay a small service fee.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-2 rounded-full">
                    <span className="block w-6 h-6 bg-green-600 rounded-full text-white text-sm flex items-center justify-center font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Transaction Processed
                    </h3>
                    <p className="text-gray-600">
                      The service fee covers processing costs, eliminating your fees.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                Example Transaction
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Item Total:</span>
                    <span className="font-semibold">$100.00</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-100 p-4 rounded-lg text-center">
                    <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900">Cash Payment</h4>
                    <p className="text-2xl font-bold text-green-600">$100.00</p>
                    <p className="text-sm text-gray-600">Customer saves on service fee</p>
                  </div>
                  
                  <div className="bg-blue-100 p-4 rounded-lg text-center">
                    <CreditCard className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-gray-900">Card Payment</h4>
                    <p className="text-2xl font-bold text-blue-600">$103.50</p>
                    <p className="text-sm text-gray-600">3.5% service fee added</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefits for Your Business
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-200">
                <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{benefit.title}</h3>
                <p className="text-gray-600 text-center">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section id="calculator" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Potential Monthly Savings
            </h2>
            <p className="text-xl text-gray-600">
              See how much you could save with cash discount processing
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Monthly Volume</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Traditional Processing</th>
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Cash Discount</th>
                    <th className="text-left py-4 px-4 font-semibold text-green-600">Monthly Savings</th>
                  </tr>
                </thead>
                <tbody>
                  {savingsExample.map((row, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="py-4 px-4 font-medium">{row.volume}</td>
                      <td className="py-4 px-4 text-red-600">{row.traditional}</td>
                      <td className="py-4 px-4">{row.cashDiscount}</td>
                      <td className="py-4 px-4 font-bold text-green-600">{row.savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              * Calculations based on average 2.9% processing fees vs. our flat monthly fee structure
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Stop Paying Processing Fees?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Get started with our cash discount program today
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Your Business Name"
                />
              </div>
              <div className="text-left">
                <label htmlFor="volume" className="block text-sm font-medium text-gray-700 mb-1">
                  Monthly Card Volume
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500">
                  <option>Under $10,000</option>
                  <option>$10,000 - $25,000</option>
                  <option>$25,000 - $50,000</option>
                  <option>$50,000 - $100,000</option>
                  <option>Over $100,000</option>
                </select>
              </div>
              <div className="text-left">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="your@email.com"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-200"
              >
                Get My Savings Quote
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CashDiscount;