import React from 'react';
import Button from "../UI/Button/Button";

const HeroText = () => {
    return (
        <div className="flex flex-col items-center items-center w-full gap-6">
            <h1 className="text-7xl w-4/6 font-bold text-center leading-tight">Start and Build Your Crypto Portfolio
                Here</h1>
            <p className="text-slate-300 text-center w-3/6">Only at CryptoCap, you can build a good portfolio and learn
                best practices about cryptocurrency.</p>
            <Button value="Get Started" classes="px-8 py-3"/>
        </div>
    );
};

export default HeroText;
