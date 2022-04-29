import React from 'react';
import Title from "../UI/Title/Title";
import FeatureCards from "./FeatureCards";

const Features = () => {
    return (
        <div className="mt-28 mb-10">
            <Title header="CryptoCap Amazing Features"
                   headerClass="text-center text-3xl font-bold"
                   subtitleClass="text-gray-400 text-sm text-center mt-4"
                   subtitle="Explore sensational features to prepare your best investment in cryptocurrency"
            />
            <FeatureCards/>
        </div>
    );
};

export default Features;
