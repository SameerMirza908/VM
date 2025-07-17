import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import logo from '../images/L&D-Logo.gif';

const Footer = () => {
  return (
    <footer className="bg-[#002D4C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <Link to="/" className="flex items-center">
                <img src={logo} alt="L&D Logo" className="h-[80px] w-[160px]" />
              </Link>
            </div>
            <p className="text-[#BDD4EA] mb-6 max-w-md">
              A family-owned business providing vending machine services, credit card processing, 
              and ATM placement solutions to help businesses grow and serve their customers better.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#F2B705]" />
                <span className="text-sm text-[#BDD4EA]">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#F2B705]" />
                <span className="text-sm text-[#BDD4EA]">info@familyvend.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#F2B705]" />
                <span className="text-sm text-[#BDD4EA]">Local Service Area</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white pt-6">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-[#BDD4EA] hover:text-[#F2B705] transition duration-200">
                  Vending Machines
                </Link>
              </li>
              <li>
                <Link to="/cash-discount" className="text-[#BDD4EA] hover:text-[#F2B705] transition duration-200">
                  Credit Card Processing
                </Link>
              </li>
              <li>
                <Link to="/atm-placement" className="text-[#BDD4EA] hover:text-[#F2B705] transition duration-200">
                  ATM Placement
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white pt-6">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-[#BDD4EA] hover:text-[#F2B705] transition duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-[#BDD4EA] hover:text-[#F2B705] transition duration-200">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-[#BDD4EA] hover:text-[#F2B705] transition duration-200">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#064789] mt-8 pt-8 text-center">
          <p className="text-[#BDD4EA] text-sm">
            © 2025 L&D Business Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;