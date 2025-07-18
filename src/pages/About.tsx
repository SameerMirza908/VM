import React from 'react';
import { Heart, Users, Handshake, Award, Target, Zap, DollarSign, BookOpen, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Family Values',
      description: 'Teaching our children entrepreneurship while building something meaningful together.'
    },
    {
      icon: BookOpen,
      title: 'Learning & Growth',
      description: 'Hands-on experience in managing operations, reading balance sheets, and understanding business.'
    },
    {
      icon: Target,
      title: 'Thoughtful Growth',
      description: 'Scaling responsibly while maintaining our commitment to quality service and community engagement.'
    },
    {
      icon: Users,
      title: 'Community Focus',
      description: 'Delivering convenience to our Dallas community while inspiring the next generation.'
    }
  ];

  const milestones = [
    { year: '2025', event: 'L&D Vendpro Solutions founded in Dallas, TX' },
    { year: '2025', event: 'Hudson gets his first vending machine to save for his first car' },
    { year: '2025', event: 'Hazel joins the venture with her own vending machine' },
    { year: '2025', event: 'Teaching financial literacy and business ownership' },
    { year: 'Future', event: 'Scaling to a few more machines while maintaining quality' },
    { year: 'Future', event: 'Inspiring other families to start their own entrepreneurial journeys' }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-[#BDD4EA] to-[#F2B705] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#002D4C] mb-4">
                L&D Vendpro Solutions
              </h1>
              <p className="text-lg text-[#002D4C] mb-6">
                A family-driven vending machine business founded in 2025 in Dallas, TX, 
                with a mission to empower young entrepreneurs while delivering convenience 
                to our community.
              </p>
              <div className="flex items-center space-x-4">
                <div className="bg-[#002D4C] p-3 rounded-full">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-[#002D4C]">Our Mission</p>
                  <p className="text-[#064789]">Teaching the next generation the value of hard work and business ownership</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Family business meeting"
                className="rounded-lg shadow-2xl max-h-80 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D4C] mb-4">
              Our Story
            </h2>
            <p className="text-xl text-[#064789] max-w-3xl mx-auto">
              How Hudson's ambition sparked a family business journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-[#BDD4EA] p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-[#002D4C] mb-4">
                  Hudson's Dream
                </h3>
                <p className="text-[#064789]">
                  It all started with 15-year-old Hudson, who was juggling school and sports while 
                  trying to save for his first car. After numerous unsuccessful job applications, 
                  his step dad Ed saw an opportunity to turn Hudson's ambition into a valuable 
                  learning experience.
                </p>
              </div>

              <div className="bg-[#FFF4D0] p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-[#002D4C] mb-4">
                  The First Machine
                </h3>
                <p className="text-[#064789]">
                  Ed, who had long been intrigued by the vending and ATM business for its 
                  semi-passive income potential, purchased Hudson's first vending machine. 
                  This allowed Hudson to manage it on his own schedule while building a 
                  small business from the ground up.
                </p>
              </div>

              <div className="bg-[#E6F0FA] p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-[#002D4C] mb-4">
                  Hazel Joins In
                </h3>
                <p className="text-[#064789]">
                  Hudson's enthusiasm was contagious! Soon his younger sister Hazel wanted 
                  to join the venture. A second vending machine was acquired, and together, 
                  the siblings began learning the ropes of entrepreneurship.
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

      <section className="py-20 bg-[#FFF4D0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D4C] mb-4">
              What We're Teaching
            </h2>
            <p className="text-xl text-[#064789]">
              More than just snacks and drinks - we're building tomorrow's entrepreneurs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition duration-200 text-center">
                <div className="bg-[#BDD4EA] p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-[#002D4C]" />
                </div>
                <h3 className="text-xl font-semibold text-[#002D4C] mb-3">{value.title}</h3>
                <p className="text-[#064789]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D4C] mb-4">
              Real Business Education
            </h2>
            <p className="text-xl text-[#064789]">
              Hudson and Hazel are gaining hands-on experience in real business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#E6F0FA] p-6 rounded-lg text-center">
              <div className="bg-[#002D4C] p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#002D4C] mb-3">Operations Management</h3>
              <p className="text-[#064789]">Learning to manage day-to-day operations, inventory, and customer service</p>
            </div>

            <div className="bg-[#BDD4EA] p-6 rounded-lg text-center">
              <div className="bg-[#002D4C] p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#002D4C] mb-3">Financial Literacy</h3>
              <p className="text-[#064789]">Reading balance sheets, analyzing profit and loss statements, and understanding finances</p>
            </div>

            <div className="bg-[#FFF4D0] p-6 rounded-lg text-center">
              <div className="bg-[#002D4C] p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-[#002D4C] mb-3">Business Ownership</h3>
              <p className="text-[#064789]">Understanding the ins and outs of running a business and entrepreneurial thinking</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#E6F0FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#002D4C] mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-[#064789]">
              From one teenager's dream to a family business adventure
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#BDD4EA]"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative flex items-center">
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8 order-2'}`}>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="text-2xl font-bold text-[#002D4C] mb-2">
                        {milestone.year}
                      </div>
                      <p className="text-[#064789]">{milestone.event}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#002D4C] w-4 h-4 rounded-full border-4 border-white"></div>
                  
                  {index % 2 !== 0 && <div className="flex-1"></div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-[#BDD4EA] to-[#E6F0FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002D4C] mb-8">
            More Than a Business
          </h2>
          
          <blockquote className="text-xl text-[#064789] italic mb-8">
            "L&D Vendpro Solutions is more than a business; it's a family journey to inspire 
            independence, responsibility, and entrepreneurial spirit in Dallas and beyond."
          </blockquote>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-2xl font-semibold text-[#002D4C] mb-4">Our Goal</h3>
            <p className="text-[#064789] text-lg">
              To grow thoughtfully, scaling to a few more machines while maintaining our 
              commitment to quality service and community engagement. We're not just providing 
              snacks and drinks—we're teaching the next generation the value of hard work, 
              financial literacy, and business ownership.
            </p>
          </div>

          <div className="bg-[#002D4C] p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Want to Start Your Own Family Business?</h3>
            <p className="text-[#BDD4EA] text-lg mb-4">
              If you're interested in learning more about the process and how to do the same for your family, 
              reach out to Ed for guidance and insights.
            </p>
            <a 
              href="mailto:ed@vendprodallas.com"
              className="inline-block bg-[#F2B705] text-[#002D4C] px-8 py-3 rounded-lg font-semibold hover:bg-[#BDD4EA] transition duration-200"
            >
              Contact Ed: ed@vendprodallas.com
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contact"
              className="bg-[#002D4C] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#064789] transition duration-200"
            >
              Work With Us
            </a>
            <a
              href="/services"
              className="border border-[#002D4C] bg-transparent text-[#002D4C] px-8 py-3 rounded-lg font-semibold hover:bg-[#002D4C] hover:text-white transition duration-200"
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