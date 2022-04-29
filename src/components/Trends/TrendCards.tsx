import React from 'react';
import CoinData from "../../types/CoinData";
import TrendCard from "./TrendCard";

interface Coins {
    coins: any,
}


const TrendCards = ({coins}:Coins) => {
    // @ts-ignore
    return (
        <div className="flex gap-6 justify-between items-center mt-8 mb-9">
            {coins.data?.data.coins.map((coin:CoinData) => (
                <TrendCard key={coin.uuid} coin={coin}/>
            ))}
        </div>
    );
};

export default TrendCards;
