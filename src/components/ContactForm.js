import React from "react";
import Image from 'next/image';
import config from '@/lib/config';
import emailjs from 'emailjs-com';
import { useTranslations } from 'next-intl'

const valuesContactForm = config.contactForm;

const ContactForm = () => {
    const t = useTranslations('ContactForm');

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_87v6b6k', 'template_7quo2ya', e.target, '_YYr8LUwq14TPoscw')
          .then((result) => {
          }, (error) => {
              console.log(error.text);
          });
    }

    return (
        <section className="hidden xl:flex bg-[#092235] items-center justify-center h-3/5 my-10 mx-64 rounded-3xl" id="contact">
            <form className="flex w-full justify-between px-16 py-8 h-full" onSubmit={ sendEmail }>
                <div className="w-1/2 space-y-4 h-full">
                    <input 
                        type="email" 
                        placeholder={ t('email') }
                        className="w-full bg-gray-300 text-gray-700 rounded-2xl px-4 py-4 mt-6 focus:outline-none focus:ring-2"
                        name="from_email"
                        required
                    />
                    <textarea 
                        className="w-full bg-gray-300 text-gray-700 rounded-2xl px-4 py-4 mt-6 h-4/6 focus:outline-none focus:ring-2 resize-none"
                        placeholder={ t('message') }
                        name="message"
                        required
                    ></textarea>
                    <button 
                        type="submit"
                        className="bg-[#00ABF0] text-white font-semibold py-2 px-24 mb-8 mt-8 rounded-full mx-auto block"
                    >
                    { t('send') }
                    </button>
                </div>
                <div className="w-1/2 flex flex-col justify-center space-y-4 ml-16">
                    <div className="flex flex-col space-y-8">
                        {valuesContactForm.map((element, index) => (
                        <div className="flex flex-row items-center" key={index}>
                            <div className="w-12 h-12 flex items-center justify-center">
                                <Image src={element.svg} className="mb-3" width={70} height={70} />
                            </div>
                            <span className="text-gray-300 text-lg font-semibold ml-4">{element.description}</span>
                        </div>
                        ))}

                    </div>
                </div>
            </form>
        </section>
    );
};

export default ContactForm;
