import React from 'react';
import { useTranslations } from 'next-intl'

const WelcomePage = () => {
  const t = useTranslations('WelcomePage');

  return (
    <section className="flex flex-col items-center justify-center h-[calc(100vh-88px)] md:h-[calc(100vh-104px)]">
        <span className="font-thin 2xl:text-2xl xl:text-xl lg:text-lg md:text-base sm:text-sm text-xs cursor-default" style={{ color: "#EDEDED" }}>{ t('StartYourJourneyWithUs') }</span>
        <h2 className="2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-semibold mt-4 tracking-tight text-center cursor-default" style={{ fontFamily: "Inter" }}>{ t('WelcomeToThe') }</h2>
        <h1 className="2xl:text-8xl xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-3xl mt-4 font-bold tracking-tight text-center cursor-default" style={{ fontFamily: "Inter" }}>{ t('WorldOfWampusBranding') }</h1>
        <button className="mt-16 bg-buttonblue hover:bg-buttonbluehover font-bold py-2 px-4 rounded cursor-pointer">
            <a href="#contact">{ t('LetsTalk') }</a>
        </button>
    </section>
  );
};

export default WelcomePage;