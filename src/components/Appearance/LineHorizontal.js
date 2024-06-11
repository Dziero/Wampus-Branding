import React from 'react';

const LineHorizontal = ({ text }) => {
    return (
        <div className="flex items-center">
            <hr className="flex-grow border-t-2 border-white" />
            <div className="text-center 2xl:mx-20 xl:mx-16 lg:mx-14 md:mx-12 sm:mx-10 mx-6 text-white 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-lg text-base font-extrabold">{text}</div>
            <hr className="flex-grow border-t-2 border-white" />
        </div>
    );
};

export default LineHorizontal;
