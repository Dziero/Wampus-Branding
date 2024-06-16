"use client";

import React from 'react';
import Flag from 'react-world-flags'
import config from '@/lib/config'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'

const Flags = config.flags

const HeaderBuilder = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuAnimation, setMenuAnimation] = useState('');
  const [buttonAnimation, setButtonAnimation] = useState('');
  const t = useTranslations('Header');
  const router = useRouter()
  
  const toggleMenu = () => {
    if (isMenuOpen) {
      setMenuAnimation('menu-close');
      setButtonAnimation('button-close');
      setTimeout(() => setIsMenuOpen(false), 300);
    } else {
      setIsMenuOpen(true);
      setMenuAnimation('menu-open');
      setButtonAnimation('button-open');
    }
  };

  return (
    <header className={`sticky top-0 bg-dark-blue p-4 flex items-center justify-between z-10 ${isMenuOpen ? "bg-[#051521]" : ""}`}>
      <div className={`text-white text-4xl pl-4 pt-4 ${isMenuOpen ? "hidden" : ""}`} style={{ fontFamily: "Just Me Again Down Here" }}>
        <a href="#">Wampus Branding</a> 
      </div>
      <button
        className={`text-white md:hidden ${isMenuOpen ? "hidden" : `block ${buttonAnimation} mr-4`}`}
        onClick={toggleMenu}
      >
        ☰
      </button>
      <nav className={`md:flex flex-col ${isMenuOpen ? `flex w-full items-center ${menuAnimation}` : "hidden"} space-y-4 md:space-y-0`}>
        <div className="flex space-x-2 justify-end">
          {Object.keys(Flags).map((key) => (
            <Flag 
              key={key} 
              code={Flags[key]} 
              fallback={<span>{key}</span>} 
              className="w-6 h-4 rounded cursor-pointer"
              onClick={() => router.push("/" + Flags[key].replace('gb', 'en'))}
            />
          ))}
        </div>
        <div className={`flex flex-col md:flex-row pt-4 items-center ${isMenuOpen ? "w-full" : ""}`}>
          <ul className={`flex flex-col md:flex-row space-y-4 md:space-y-0 items-center ${isMenuOpen ? "w-full" : ""} md:space-x-4 ml-8 text-white`}>
            <li className="content-center pr-6"><a href="#">{ t('Home') }</a></li>
            <li className="content-center pr-6"><a href="#career">{ t('Career') }</a></li>
            <li className="content-center pr-6"><a href="#projects">{ t('Projects') }</a></li>
          </ul>
          <button className={`ml-4 bg-white text-black px-4 py-2 rounded ${isMenuOpen ? "mt-4" : ""}`}>
            { t('Customer Dashboard') }
          </button>
          <button
            className={`bg-buttonbluehover text-black md:hidden w-fit px-4 my-2 rounded ${isMenuOpen ? "block mt-4" : "hidden"}`}
            onClick={toggleMenu}
          >
            ✕
          </button>
        </div>
      </nav>
    </header>
  );
};

export default HeaderBuilder;