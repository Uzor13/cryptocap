import React from 'react';
import Title from "../UI/Title/Title";
import Filters from "./Filters";
import Input from "../UI/Input/Input";
import Table from "../UI/Table/Table";
import CryptoData from "../../types/CryptoData";

const Updates:React.FC<CryptoData> = ({coins}) => {
    return (
        <div>
            <Title header="Market Update"
                   subtitle="Cryptocurrency Categories"
                   headerClass="text-5xl font-bold mt-32"
                   subtitleClass="text-gray-400 text-xl mt-8"/>
            <div className="flex justify-between items-center h-24">
                <Filters/>
                <Input type="search" classes="w-96 h-12 rounded border-2 border-gray-500 pl-4 bg-transparent mt-10"
                       placeholder="Search Coin"/>
            </div>
            <Table coins={coins}/>
        </div>
    );
};

export default Updates;