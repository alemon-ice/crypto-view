import React, { useEffect, useState } from 'react';

import cryptoHTTP from '../../http';

import { Coin } from 'components';

import './styles.css';

interface HeaderProps {
  onSelect: (coin: string) => void
}

export interface CoinType {
  oldPrice: number;
  currentPrice: number;
}

interface PricesType {
  [key: string]: CoinType;
}

const Header = (props: HeaderProps) => {
  const { onSelect } = props;

  const initialPricesDefault = {
    BTC: {
      oldPrice: 0,
      currentPrice: 0,
    },
    LTC: {
      oldPrice: 0,
      currentPrice: 0,
    },
  };

  const [prices, setPrices] = useState<PricesType>(initialPricesDefault);

  useEffect(() => {
    const intervals = Object.keys(initialPricesDefault).map(coin => {
      return setInterval(() => {
        cryptoHTTP.get(`price?fsym=${coin}&tsyms=BRL`)
          .then(response => {
            setPrices(prev => {
              if (prev[coin].currentPrice === response.data.BRL) {
                return prev
              }

              return {
                ...prev,
                [coin]: {
                  oldPrice: prev[coin].currentPrice,
                  currentPrice: response.data.BRL,
                }
              }
            });
          });
      }, 5000)
    });

    return () => intervals.forEach(interval => clearInterval(interval))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="header-container">
      { Object.keys(prices).map(coin => (
        <div className="coin-item" onClick={() => onSelect(coin)}>
          <Coin coin={coin} oldPrice={prices[coin].oldPrice} currentPrice={prices[coin].currentPrice} />
        </div>
      ))}
    </div>
  );
}

export default Header;
