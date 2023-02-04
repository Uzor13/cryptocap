import React from 'react';
import {Sparklines, SparklinesLine} from "react-sparklines";
import Button from "../Button/Button";
import CSS from "csstype";

const TableDefinition = ({data, index}: any) => {
    const {
        sparkline,
        symbol,
        name,
        iconUrl,
        price,
        change,
        coinrankingUrl,
        color
    } = data;

    const rowStyle: CSS.Properties = {
        borderBottom: "1px solid grey"
    }

    return (
        <tr className="mb-5 border-b border-gray-700">
            <td className="px-10">{index + 1}</td>
            <td className="flex gap-x-10 items-center h-full">
                <div style={{backgroundColor: `${color}`}}
                     className="h-10 w-10 relative rounded-full flex justify-center items-center">
                    <img className="h-8 absolute text-white" src={iconUrl} alt={name}/>
                </div>
                <a href={coinrankingUrl}>{name}</a>
                ({symbol})
            </td>
            <td>${Number(price).toLocaleString()}</td>
            <td>{change}%</td>
            <td className="w-32">
                <Sparklines data={sparkline} width={50} height={20} margin={5}>
                {change < 0 ? <SparklinesLine color="rgb(239 68 68)"/>
                    : <SparklinesLine color="rgb(13 148 136)"/>
                }
            </Sparklines>
            </td>
            <td className="w-44 px-12">
                <Button value="Trade" classes="w-auto h-8 px-3 bg-teal-500 text-white"/>
            </td>
        </tr>
    );
};

export default TableDefinition;