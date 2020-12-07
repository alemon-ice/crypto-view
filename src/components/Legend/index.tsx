import React from 'react';

import './styles.css';

interface LegendProps {
  children: string
}

const Legend = (props: LegendProps) => {
  const { children } = props

  return (
    <>
      <div className="legend-container">
        {children}
      </div>
    </>
  );
}

export default Legend;
