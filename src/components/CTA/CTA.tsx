import React from 'react';
import Title from "../UI/Title/Title";
import Button from "../UI/Button/Button";

const CTA = () => {
    return (
        <div className="mt-36 mb-10 flex justify-between items-center px-10">
            <Title header="New In Cryptocurrency?"
                   headerClass="text-2xl"
                   subtitleClass="text-gray-400 w-2/3 mt-6 leading-relaxed"
                   subtitle="We'll tell you what cryptocurrencies are, how they work and why
                   you should own one right now. So let's do it."
            />
            <Button value="Learn & Explore Now" classes="h-12 px-6 bg-teal-600 text-white rounded "/>
        </div>
    );
};

export default CTA;
