import React from "react";

const ContactForm = () => {
    return (
    <section className="hidden sm:flex bg-transparent items-center justify-center mx-auto h-auto p-10 rounded-md" id="contact">
            <div className="bg-[#0B2C45] px-16 py-8 rounded-md flex justify-between w-full">
                <div className="flex flex-col justify-between w-2/4">
                    <input 
                        type="text" 
                        placeholder="example@gmail.com" 
                        className="p-4 bg-gray-300 rounded-md mb-4 text-lg"
                        required
                    />
                    <textarea 
                        placeholder="Your Message" 
                        className="p-4 bg-gray-300 rounded-md flex-grow text-lg h-72"
                        required
                    />

                <div className="flex justify-center">
                    <button className="bg-[#00ABF0] text-white py-3 px-6 rounded-full mt-4 text-lg font-bold w-1/4">
                        Send
                    </button>
                </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
