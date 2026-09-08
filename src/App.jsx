import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Coinrow from './assets/Components/Coinrow';
import './App.css';
const App = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    try {
      axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
        .then((res) => {
          setCoins(res.data);
        })
    }
    catch (err) {
      console.log(err)
    }
  }, [])
  return (
    <div className='app'>
      <h1>Cryptocurrency Prices</h1>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Coin</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <Coinrow key={coin.id} coin={coin} />
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default App;
