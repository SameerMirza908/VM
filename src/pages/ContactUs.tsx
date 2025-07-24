import React from 'react';

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 flex flex-col items-center px-4"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#002D4C] mb-4">
          Contact Us Now
        </h2>
        <p className="text-lg md:text-xl text-[#002D4C] max-w-2xl mx-auto">
          Have a question or need assistance? Fill out the form and we’ll get back to you as soon as possible.
        </p>
      </div>

      {/* Inquiry Form */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 w-full max-w-3xl shadow-md mb-24">
        <iframe
          src="https://link.pipelinepro.co/widget/form/uFzeZPgwbwjfeqdIiHq9"
          style={{
            width: '100%',
            height: '700px',
            border: 'none',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
          title="Vending Business Inquiry Form"
        />
      </div>

      {/* Appointment Section */}
      <div className="text-center w-full max-w-4xl mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-[#002D4C] mb-2">
          Book an Appointment With Us
        </h3>
        <p className="text-lg text-[#002D4C]">
          Choose a time that works best for your consultation.
        </p>
      </div>

      {/* Appointment Calendar */}
      <div className="w-full max-w-4xl mb-8">
        <iframe
          src="https://link.pipelinepro.co/widget/booking/OEJgWhHim5pDGRFigkgz"
          style={{
            width: '100%',
            height: '900px',
            border: 'none',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
          scrolling="no"
          title="Appointment Booking"
        />
      </div>
    </section>
  );
};

export default ContactUs;
