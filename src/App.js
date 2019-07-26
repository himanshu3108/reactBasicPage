import React from 'react';
import './resources/styles.css'
import Featured from './featured/index';
import Header from './components/header_footer/Header'

function App() {
  return (
    <div className="App" style = {{height: "1500px", backgroundColor : 'cornflowerblue'}}>
      <Header />
      <Featured />
    </div>
  );
}

export default App;
