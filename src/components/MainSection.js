import React from 'react';

const MainSection = () => {
  return (
    <div className="fixed top-0 flex flex-col items-center justify-center h-svh w-svw -z-10">
        <span className="font-thin 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs" style={ { color: "#EDEDED" }}>Start Your Journey with Us</span>
        <h2 className="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold mt-4 tracking-tight text-center" style={ { fontFamily: "Inter" } } >Welcome to the</h2>
        <h1 className="2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl mt-4 font-bold tracking-tight text-center" style={ { fontFamily: "Inter" } } >World of Wampus Branding</h1>
        <button className="mt-16 bg-buttonblue hover:bg-buttonbluehover font-bold py-2 px-4 rounded" >
            Let's Talk
        </button>
    </div>
  );
};

export default MainSection;