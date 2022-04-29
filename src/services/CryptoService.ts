import axios from "axios";
import CryptoData from "../types/CryptoData";

// @ts-ignore
const apiClient = axios.create({
    baseURL: 'https://coinranking1.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': '45dfe10115msh2d6b2294703214bp1fecf9jsndc521b5ab8d4',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
})

const getTopFiveCoins = async () => {
    const response = await apiClient.get<CryptoData[]>(`/coins?limit=5`);
    // @ts-ignore
    return response.data.data.coins;
}


const cryptoService = {getTopFiveCoins}

export default cryptoService