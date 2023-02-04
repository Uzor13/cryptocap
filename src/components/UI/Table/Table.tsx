import React from 'react';
import CoinData from "../../../types/CoinData";
import TableDefinition from "./TableDefinition";
import CSS from "csstype";

interface Coins {
    coins: any,
}

const style: CSS.Properties = {
    height: "30rem"
};

const Table = ({coins}: Coins) => {
    return (
        <table style={style} className="mt-10 w-full rounded-lg rounded-bl-none rounded-br-none bg-slate-700 bg-opacity-20 backdrop-blur-lg drop-shadow-lg">
            <thead className="h-16 text-left">
            <tr className="border-b border-gray-700">
                <th className="w-32 px-10">NO</th>
                <th className="w-96">NAME</th>
                <th>LAST PRICE</th>
                <th className="w-28">CHANGE</th>
                <th>MARKET STATS</th>
                <th className="px-12">TRADE</th>
            </tr>
            </thead>
            <tbody className="h-auto gap-y-10">
                {coins?.data?.data?.coins.map((coin: CoinData, index: number) => (
                    <TableDefinition data={coin} key={coin.uuid} index={index}/>
                ))}
            </tbody>
        </table>
    );
};

export default Table;