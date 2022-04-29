import React from 'react';
import './styles/App.css';
import {ReactQueryDevtools} from "react-query/devtools";
import {useQuery} from "react-query";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Trends from "./components/Trends/Trends";
import axios from "axios";
import Features from "./components/Features/Features";
import CTA from "./components/CTA/CTA";


function App() {

    const {status, data} = useQuery("coins", async () =>
        await axios.get("https://coinranking1.p.rapidapi.com/coins?limit=4", {
            headers: {
                'X-RapidAPI-Key': '45dfe10115msh2d6b2294703214bp1fecf9jsndc521b5ab8d4',
                'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
            }
        })
    );

    if (status === "loading") return <p>Loading...</p>;
    if (status === "error") return <p>Error :(</p>;

    console.info(data?.data.data.coins)

    // @ts-ignore
    return (
        <>
            <div className="px-16 h-full text-white">
                <Header/>
                <Hero/>
                <Trends coins={data}/>
                <Features/>
                <CTA/>
            </div>
            <ReactQueryDevtools initialIsOpen={false}/>
        </>
    );
}

export default App;
