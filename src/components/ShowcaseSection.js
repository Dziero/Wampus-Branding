import React from 'react';
import config from '@/lib/config'
import { useTranslations } from 'next-intl'

const projects = config.projects;

const ShowcaseSection = () => {
    const t = useTranslations('ShowcaseSection');

    return (
        <section className="2xl:min-h-[calc(100vh-59px)] xl:min-h-[calc(100vh-47px)] lg:min-h-[calc(100vh-38px)] md:min-h-[calc(100vh-30px)] min-h-[calc(100vh-24px)] pb-16" id="projects">
            <div className="text-center pt-2">
                <span className="font-thin tracking-tight text-center cursor-default 2xl:text-xl xl:text-lg lg:text-base md:text-sm text-xs px-3">{ t('Below') }</span>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:gap-28 xl:gap-24 lg:gap-16 gap-8 pt-16 px-4 2xl:w-4/6 2xl:h-5/6 lg:w-5/6 lg:h-5/6">
                    {projects.map((project, index) => (
                    <div key={index} className="relative rounded-lg">
                        <img
                        src={project.img}
                        alt={ t("title" + index) }
                        className="object-cover rounded-lg w-full h-full"
                        />
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
                        <h2 className="text-2xl font-bold">{ t("title" + index) }</h2>
                        <p className="text-lg mb-4 pt-4">{ t("desc" + index) }</p>
                        <a href={project.url} className="no-underline" target="_blank">
                            <button className="bg-buttonblue text-white font-semibold px-4 py-2 rounded hover:bg-buttonbluehover">
                                { t('TakeALook') }
                            </button>
                        </a>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ShowcaseSection;