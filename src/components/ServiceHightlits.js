import React from 'react';
import Image from 'next/image';
import config from '@/lib/config'

const valuesElements = config.serviceHighlights;
const valuesDashboard = config.serviceHighlightsDashBoard;


const ServiceHighlights = () => {
    return (
        <section className="2xl:min-h-[calc(100vh-59px)] xl:min-h-[calc(100vh-47px)] lg:min-h-[calc(100vh-38px)] md:min-h-[calc(100vh-30px)] min-h-[calc(100vh-24px)]">
            <div className="flex flex-col items-center justify-center" id="career">
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:gap-28 xl:gap-24 lg:gap-16 gap-8 pt-16 pb-16 px-4 2xl:w-4/6 2xl:h-5/6 lg:w-5/6 lg:h-5/6 items-center justify-center">
                    {valuesElements.slice(0, 4).map((element, index) => (
                        <div className="flex flex-col items-center text-center" key={index}>
                            <Image src={element.svg}  className="mb-3" width={70} height={70} />
                            <h2 className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base font-semibold mb-2">{element.title}</h2>
                            <p className="2xl:text-lg xl:text-base lg:text-sm md:text-xs sm:text-xs max-w-xs text-[#6D767D]">{element.description}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center text-center mb-8">
                    <Image src={valuesDashboard.svg}  className="mb-3" width={70} height={70} />
                    <h2 className="2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-base font-semibold mb-2">{valuesDashboard.title}</h2>
                    <p className="2xl:text-lg xl:text-base lg:text-sm md:text-xs sm:text-xs max-w-4xl mb-4 text-[#6D767D]">{valuesDashboard.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-2 mb-8 justify-center mx-auto max-w-screen-xl">
                        <button className="bg-[#00ABF0] text-white font-semibold py-2 px-4 rounded-lg sm:px-6 lg:py-4 lg:px-8">{valuesDashboard.buttonTextDashboard}</button>
                        <button className="bg-[#00ABF0] text-white font-semibold py-2 px-4 rounded-lg sm:px-6 lg:py-4 lg:px-8">{valuesDashboard.buttonTextFind}</button>

                    </div>

                </div>
            </div>

        </section>
    );
};

export default ServiceHighlights;
