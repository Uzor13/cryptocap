import React from 'react';
import Button from "../UI/Button/Button";

const FilterBtn = () => {
    const btnNames = [
        {id: 1, name: "Popular"},
        {id: 2, name: "Metaverse"},
        {id: 3, name: "Entertainment"},
        {id: 4, name: "Energy"},
        {id: 5, name: "Gaming"},
        {id: 6, name: "Music"},
        {id: 7, name: "See All 12+"},
    ];
    return (
        <div className="flex gap-5">
            {btnNames.map(btn => (
                <div key={btn.id}>
                    <Button value={btn.name} key={btn.id} classes="w-auto h-12 px-3 bg-transparent text-gray-300 border border-gray-500"/>
                </div>
            ))}
        </div>
    );
};

export default FilterBtn;