import React,{ useState, useEffect } from 'react'
import axios from "axios";
import Coin from "./Coin";
import './CSS/Coin.css';

export default function Home() {
  const [coins, setCoins] = useState([]);


  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      }).catch(error => console.log(error));
    },[]);

    const filteredCoins = coins.filter(coin =>
      coin.name);
  return (
    <div >
      <div className="topHeading">
      <h1>Top 100 Currencies </h1>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
            key={coin.id}
            rank={coin.market_cap_rank}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
          />
        );
      })}


      ;

    </div>
  )
}
