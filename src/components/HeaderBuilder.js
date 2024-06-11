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
  const t = useTranslations('Header');
  const router = useRouter()

  return (
    <header className="sticky top-0 bg-dark-blue p-4 flex items-center justify-between z-10">
      <div className="text-white text-4xl pl-4 pt-4" style={{ fontFamily: "Just Me Again Down Here" }}>
       <a href="#">Wampus Branding</a> 
      </div>
      <button
        className={`text-white md:hidden ${isMenuOpen ? "hidden" : "block"}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
      <nav className={`md:block ${isMenuOpen ? "block" : "hidden"} space-y-4 md:space-y-0`}>
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
        <div className="flex flex-col md:flex-row pt-4">
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ml-8 text-white">
            <li className="content-center pr-6"><a href="#">{ t('Home') }</a></li>
            <li className="content-center pr-6"><a href="#career">{ t('Career') }</a></li>
            <li className="content-center pr-6"><a href="#projects">{ t('Projects') } </a></li>
          </ul>
          <button className="ml-4 bg-white text-black px-4 py-2 rounded">
            { t('Customer Dashboard') }
          </button>
          <button
            className={`text-white md:hidden ${isMenuOpen ? "block" : "hidden"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ✕
          </button>
        </div>
      </nav>
    </header>
  );
};

export default HeaderBuilder;