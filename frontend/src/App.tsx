import React from 'react';
const MAIN_WEBSITE: string = 'https://dogeapp.zplusfour.repl.co';

const App: React.FC = () => {
  return (
    <div style={{
      alignContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'center',
    }}>
      <span><img src={`${MAIN_WEBSITE}/doge.png`} height="100" width="100" alt="doge"/></span><h1>Hey, DogeApp is not running right now...</h1>
    </div>
  )
};

export default App;
