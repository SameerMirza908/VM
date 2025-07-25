import React from 'react';
import { CreditCard, DollarSign, TrendingDown, CheckCircle, Calculator } from 'lucide-react';

const CashDiscount = () => {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'Eliminate Processing Fees',
      description: 'Customers paying with cards cover the processing fees, not you.',
      image: 'https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: DollarSign,
      title: 'Increase Cash Payments',
      description: 'Customers choose cash to avoid the service fee, improving your cash flow.',
      image: 'https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Calculator,
      title: 'Transparent Pricing',
      description: 'Clear, upfront pricing with no hidden fees or long-term contracts.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: CheckCircle,
      title: 'Fully Compliant',
      description: 'Our system meets all legal requirements for cash discount programs.',
      image: 'https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=600'
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
      <section className="relative bg-gradient-to-br from-[#BDD4EA] to-[#F2B705] py-12 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3182796/pexels-photo-3182796.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#002D4C] mb-4">
                Stop Paying Credit Card Processing Fees
              </h1>
              <p className="text-lg text-[#002D4C] mb-6">
                With our cash discount program, customers who pay with cards cover the processing fees. 
                Cash customers receive a discount. It's a win-win solution that can save your business thousands.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="bg-[#002D4C] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#064789] transition duration-200 text-center"
                >
                  Start Saving Today
                </a>
                <a
                  href="#calculator"
                  className="border border-[#002D4C] text-[#002D4C] px-6 py-2.5 rounded-lg font-semibold hover:bg-[#BDD4EA] transition duration-200 text-center"
                >
                  Calculate Savings
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4386433/pexels-photo-4386433.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Credit card processing terminal"
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
              How Cash Discount Processing Works
            </h2>
            <p className="text-xl text-[#064789] max-w-3xl mx-auto">
              A simple system that saves you money while offering customers choice
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4 group">
                  <div className="bg-[#BDD4EA] p-2 rounded-full flex-shrink-0">
                    <span className="block w-6 h-6 bg-[#002D4C] rounded-full text-white text-sm flex items-center justify-center font-bold">1</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start space-x-3">
                      <div>
                        <h3 className="text-lg font-semibold text-[#002D4C] mb-2">
                          Customer Makes Purchase
                        </h3>
                        <p className="text-[#064789]">
                          Items are priced at the cash discount price by default.
                        </p>
                      </div>
                      <img
                        src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Customer shopping"
                        className="w-16 h-16 object-cover rounded-lg shadow-md opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-[#BDD4EA] p-2 rounded-full flex-shrink-0">
                    <span className="block w-6 h-6 bg-[#002D4C] rounded-full text-white text-sm flex items-center justify-center font-bold">2</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start space-x-3">
                      <div>
                        <h3 className="text-lg font-semibold text-[#002D4C] mb-2">
                          Payment Method Selected
                        </h3>
                        <p className="text-[#064789]">
                          Cash customers pay the posted price. Card customers pay a small service fee.
                        </p>
                      </div>
                      <img
                        src="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Payment selection"
                        className="w-16 h-16 object-cover rounded-lg shadow-md opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="bg-[#BDD4EA] p-2 rounded-full flex-shrink-0">
                    <span className="block w-6 h-6 bg-[#002D4C] rounded-full text-white text-sm flex items-center justify-center font-bold">3</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start space-x-3">
                      <div>
                        <h3 className="text-lg font-semibold text-[#002D4C] mb-2">
                          Transaction Processed
                        </h3>
                        <p className="text-[#064789]">
                          The service fee covers processing costs, eliminating your fees.
                        </p>
                      </div>
                      <img
                        src="https://images.pexels.com/photos/3943723/pexels-photo-3943723.jpeg?auto=compress&cs=tinysrgb&w=400"
                        alt="Transaction complete"
                        className="w-16 h-16 object-cover rounded-lg shadow-md opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#FFF4D0] p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-[#002D4C] mb-6 text-center">
                Example Transaction
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border border-[#BDD4EA]">
                  <div className="flex justify-between items-center">
                    <span className="text-[#064789]">Item Total:</span>
                    <span className="font-semibold text-[#002D4C]">$100.00</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#BDD4EA] p-4 rounded-lg text-center hover:shadow-md transition-shadow duration-300">
                    <DollarSign className="h-8 w-8 text-[#002D4C] mx-auto mb-2" />
                    <h4 className="font-semibold text-[#002D4C]">Cash Payment</h4>
                    <p className="text-2xl font-bold text-[#002D4C]">$100.00</p>
                    <p className="text-sm text-[#064789]">Customer saves on service fee</p>
                  </div>
                  
                  <div className="bg-[#E6F0FA] p-4 rounded-lg text-center hover:shadow-md transition-shadow duration-300">
                    <CreditCard className="h-8 w-8 text-[#064789] mx-auto mb-2" />
                    <h4 className="font-semibold text-[#002D4C]">Card Payment</h4>
                    <p className="text-2xl font-bold text-[#064789]">$103.50</p>
                    <p className="text-sm text-[#064789]">3.5% service fee added</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#FFF4D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D4C] mb-4">
              Benefits for Your Business
            </h2>
            <p className="text-xl text-[#064789]">
              Our cash discount program provides value to your business
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

      <section id="calculator" className="relative py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1600)',
          }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D4C] mb-4">
              Potential Monthly Savings
            </h2>
            <p className="text-xl text-[#064789]">
              See how much you could save with cash discount processing
            </p>
          </div>

          <div className="bg-[#FFF4D0]/95 backdrop-blur-sm rounded-lg p-8 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-[#BDD4EA]">
                    <th className="text-left py-4 px-4 font-semibold text-[#002D4C]">Monthly Volume</th>
                    <th className="text-left py-4 px-4 font-semibold text-[#002D4C]">Traditional Processing</th>
                    <th className="text-left py-4 px-4 font-semibold text-[#002D4C]">Cash Discount</th>
                    <th className="text-left py-4 px-4 font-semibold text-[#002D4C]">Monthly Savings</th>
                  </tr>
                </thead>
                <tbody>
                  {savingsExample.map((row, index) => (
                    <tr key={index} className="border-b border-[#BDD4EA] hover:bg-white/50 transition-colors duration-200">
                      <td className="py-4 px-4 font-medium text-[#002D4C]">{row.volume}</td>
                      <td className="py-4 px-4 text-[#064789]">{row.traditional}</td>
                      <td className="py-4 px-4 text-[#064789]">{row.cashDiscount}</td>
                      <td className="py-4 px-4 font-bold text-[#002D4C]">{row.savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-[#064789] mt-4">
              * Calculations based on average 2.9% processing fees vs. our flat monthly fee structure
            </p>
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
            Ready to Stop Paying Processing Fees?
          </h2>
          <p className="text-xl text-[#064789] mb-8">
            Get started with our cash discount program today
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
                  Monthly Card Volume
                </div>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#064789] focus:border-[#064789]">
                  <option>Under $10,000</option>
                  <option>$10,000 - $25,000</option>
                  <option>$25,000 - $50,000</option>
                  <option>$50,000 - $100,000</option>
                  <option>Over $100,000</option>
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
                className="w-full bg-[#002D4C] text-white py-3 rounded-lg font-semibold hover:bg-[#E6A604] transition duration-200"
              >
                Get My Savings Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CashDiscount;