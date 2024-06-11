import React from "react";

const FooterBuilder = () => {
  return (
    <section className="flex flex-col items-center px-12 sm:px-14 md:px-16 lg:px-20 xl:px-24 2xl:px-28">
      <hr className="w-full border-t-2 border-white" />
        <div
          className="text-white text-4xl pl-4 pt-4 mt-3 mb-5 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8"
          style={{ fontFamily: "Just Me Again Down Here" }}
        >
          <a href="#"> Wampus Branding</a>
        </div>
    </section>
  );
};

export default FooterBuilder;
