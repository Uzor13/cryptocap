import React from 'react';
import FeatureCard from "./FeatureCard";
import {BsCoin} from "react-icons/bs";
import {BsShieldFillCheck} from "react-icons/bs";
import {FaBitcoin} from "react-icons/fa";
import {FaBook} from "react-icons/fa";

const FeatureCards = () => {
    return (
        <div className="flex items-center justify-between w-full mt-12 gap-x-10">
            <FeatureCard header="Manage Portfolio"
                         headerClass="text-base font-semibold"
                         subtitleClass="font-roboto text-gray-400 text-sm mt-3"
                         subtitle="Buy and sell popular digital currencies, keep track of them in the one place."
                         icon={<BsCoin className="absolute w-8 h-8 text-white"/>}
            />
            <FeatureCard header="Protected Securely"
                         headerClass="text-base font-semibold"
                         subtitleClass="font-roboto text-gray-400 text-sm mt-3"
                         subtitle="All cash balances are covered by FDIC insurance, up to a maximum of $250,000."
                         icon={<BsShieldFillCheck className="absolute w-8 h-8 text-white"/>}
            />
            <FeatureCard header="Cryptocurrency Variety"
                         headerClass="text-base font-semibold"
                         subtitleClass="font-roboto text-gray-400 text-sm mt-3"
                         subtitle="Supports a variety of the most popular digital currencies and always uptodate."
                         icon={<FaBitcoin className="absolute w-8 h-8 text-white"/>}
            />
            <FeatureCard header="Learn Best Practice"
                         headerClass="text-base font-semibold"
                         subtitleClass="font-roboto text-gray-400 text-sm mt-3"
                         subtitle="Easy to know how to cryptocurrency works and friendly to newbie."
                         icon={<FaBook className="absolute w-8 h-8 text-white"/>}
            />
        </div>
    );
};

export default FeatureCards;
