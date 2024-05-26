import React from 'react';

const HeaderLine = ({ text }) => {
    return (
        <div className="flex items-center">
            <hr className="flex-grow border-t-2 border-white" />
            <div className="text-center mx-20 text-white text-4xl font-extrabold">{text}</div>
            <hr className="flex-grow border-t-2 border-white" />
        </div>
    );
};

export default HeaderLine;
