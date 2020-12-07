import React from 'react';
import { render, screen } from '@testing-library/react'

import Coin from '../components/Coin'

it('Check coin label', () => {
  render(<Coin coin="BTC" oldPrice={0} currentPrice={0} />)
  // eslint-disable-next-line jest/valid-expect
  expect(screen.getByText('BTC'))
});
