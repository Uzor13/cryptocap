import React from 'react';
import CryptoData from "../../types/CryptoData";
import TrendCards from "./TrendCards";

const Trends:React.FC<CryptoData> = ({coins}) => {

    // @ts-ignore
    return (
        <div>
           <h1 className="text-xl font-semibold">Market Trends</h1>
                <TrendCards coins={coins}/>
        </div>
    );
};

export default Trends;
