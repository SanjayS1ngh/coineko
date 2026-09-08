import React from 'react';

const Coinrow = ({ coin }) => {
    return (
        <tr>
            <td>{coin.market_cap_rank}</td>
            <td>{coin.name}</td>
            <td>{coin.symbol}</td>
            <td>{coin.current_price}</td>
            <td>{coin.market_cap}</td>
            <td>{coin.price_change_percentage_24h}</td>
        </tr>
    );
}

export default Coinrow;
