import React from 'react';


const ContactUs = () => {
  
  return (
 <section id="contact" className="py-20 bg-white flex flex-col items-center px-4">
  {/* Section Title */}
  <div className="text-center mb-12">
    <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
      Contact Us Now
    </h2>
    <p className="text-lg md:text-xl text-gray-600">
      Fill out the form below and we'll be in touch soon.
    </p>
  </div>

  {/* Inquiry Form */}
  <div className="bg-white rounded-xl border border-gray-200 p-8 w-full max-w-3xl mb-24">
    <iframe
      src="https://link.pipelinepro.co/widget/form/uFzeZPgwbwjfeqdIiHq9"
      style={{
        width: '100%',
        height: '700px',
        border: 'none',
        borderRadius: '12px',
        overflow: 'hidden',
      }}
      id="inline-uFzeZPgwbwjfeqdIiHq9"
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Vending Business Inquiry Form"
      data-height="600"
      data-layout-iframe-id="inline-uFzeZPgwbwjfeqdIiHq9"
      data-form-id="uFzeZPgwbwjfeqdIiHq9"
      title="Vending Business Inquiry Form"
    />
  </div>

  {/* Appointment Section Title */}
  <div className="text-center mb-6 w-full max-w-4xl mb-8">
    <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
      Book an Appointment With Us
    </h3>
    <p className="text-lg text-gray-600">
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
      id="OEJgWhHim5pDGRFigkgz_1751880860212"
      title="Appointment Booking"
    />
  </div>

  <script
    src="https://link.pipelinepro.co/js/form_embed.js"
    type="text/javascript"
  ></script>
</section>


    
  );
};

export default ContactUs;