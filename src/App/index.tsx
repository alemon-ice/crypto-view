import React, { useState } from 'react';

import { Header, Chart } from 'components';

import '../styles/global.css';
import './styles.css';

function App() {
  const [coinSelected, setCoinSelected] = useState('BTC');

  return (
    <div className="App">
      <Header onSelect={coin => setCoinSelected(coin)} />
      <Chart coin={coinSelected} />
    </div>
  );
}

export default App;
