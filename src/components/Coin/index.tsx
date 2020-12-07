import React, { useEffect, useState } from 'react';

import './styles.css';

interface CoinProps {
  coin: string;
  oldPrice: number;
  currentPrice: number;
}

const Coin = ({ coin, oldPrice, currentPrice }: CoinProps) => {
  const [getClasses, setClasses] = useState<string[]>(['container']);

  useEffect(() => {
    if (oldPrice < currentPrice) {
      setClasses(prev => [...prev, 'up']);
    } else if (oldPrice > currentPrice) {
      setClasses(prev => [...prev, 'down']);
    }
  }, [oldPrice, currentPrice]);

  return (
    <div className={getClasses.join(' ')}>
      <span>{coin}</span>
      <span>R$ {currentPrice.toLocaleString()}</span>
    </div>
  );
}

export default Coin;