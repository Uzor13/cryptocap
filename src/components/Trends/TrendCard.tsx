import React from 'react';
import {BsArrowUpRight, BsArrowDownLeft} from "react-icons/bs";
import {Sparklines, SparklinesLine} from 'react-sparklines'


const TrendCard = ({coin}: any) => {

    const {
        sparkline,
        symbol,
        name,
        iconUrl,
        price,
        change,
        color
    } = coin;

    return (
        <div
            className="flex flex-col h-40 gap-4 w-1/3 rounded-lg p-4 card bg-slate-700 bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
            <div className="flex items-center justify-between gap-4">
                <div style={{backgroundColor: `${color}`}}
                     className="h-10 w-10 relative rounded-full flex justify-center items-center">
                    <img className="h-8 absolute" src={iconUrl} alt={name}/>
                </div>
                <p className="">{symbol}</p>
                <p className="w-auto p-1 bg-gray-300 text-slate-900 uppercase text-xs rounded">{name}</p>
                <div className="w-6 h-6 rounded-full flex justify-center items-center bg-slate-600">
                    {change < 0 ? <BsArrowDownLeft/> : <BsArrowUpRight/>}
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-lg mb-3">${Number(price).toLocaleString()}</p>
                    <p className="text-gray-400">{change}%</p>
                </div>
                <Sparklines data={sparkline} width={50} height={20} margin={5}>
                    {change < 0 ? <SparklinesLine color="rgb(239 68 68)"/>
                        : <SparklinesLine color="rgb(13 148 136)"/>
                    }
                </Sparklines>
            </div>
        </div>
    );
};

export default TrendCard;
