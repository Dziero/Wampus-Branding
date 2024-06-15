import React from "react";
import Image from 'next/image';
import config from '@/lib/config'

const valuesContactForm = config.contactForm;

const ContactForm = () => {
    return (
<section className="hidden sm:flex bg-[#092235] items-center justify-center h-3/5 my-10 mx-64 rounded-3xl" id="contact">

  <div className="w-full flex justify-between px-16 py-8 h-full">
    <div className="w-1/2 space-y-4 h-full">
      <input 
        type="email" 
        placeholder="Email"
        className="w-full bg-gray-300 text-gray-700 rounded-2xl px-4 py-4 mt-6 focus:outline-none focus:ring-2"
        name="Email"
      />
      <textarea 
        className="w-full bg-gray-300 text-gray-700 rounded-2xl px-4 py-4 mt-6 h-4/6 focus:outline-none focus:ring-2 resize-none"
        placeholder="Message"
        name="Message"
      ></textarea>
        <button 
        type="submit"
        className="bg-[#00ABF0] text-white font-semibold py-2 px-24 mb-8 mt-8 rounded-full mx-auto block"
        >
        Send
        </button>
    </div>

    <div className="w-1/2 flex flex-col justify-center space-y-4 ml-16">
      <div className="flex flex-col space-y-8">
        {valuesContactForm.map((item, index) => (
            <div className="flex flex-row items-center" key={index}>
                <div className="w-12 h-12 flex items-center justify-center">
                    <Image src={item.svg} className="mb-3" width={70} height={70} />
                </div>
                <span className="text-gray-300 text-lg font-semibold ml-4">{item.description}</span>
            </div>
        ))}

      </div>
    </div>
  </div>
  
</section>



    );
};

export default ContactForm;
