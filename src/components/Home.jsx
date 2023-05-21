import React, { useState } from 'react';

const Home = () => {
  const [crypto, setCrypto] = useState("BTCUSDT");
  const [price, setPrice] = useState("");

  const handleCryptoChange = (event) => {
    setCrypto(event.target.value);
  }

  const handleButtonClick = async () => {
    const apiUrl = `https://api.binance.com/api/v3/ticker/price?symbol=${crypto}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    const price = data.price;
    setPrice(price);
  }
  return (
    <>
      <div className='principal_title'>
        <h2>Choisissez la crypto ou devise de votre choix</h2>
        <select id="crypto-select" className="select-crypto" value={crypto} onChange={handleCryptoChange}>
            <option className='select-option' value="BTCUSDT">Bitcoin</option>
            <option className='select-option' value="ETHUSDT">Ethereum</option>
            <option className='select-option' value="XRPUSDT">Ripple</option>
            <option className='select-option' value="BNBUSDT">Binance Coin</option>
            <option className='select-option' value="ADAUSDT">Cardano</option>
            <option className='select-option' value="DOTUSDT">Polkadot</option>
            <option className='select-option' value="SOLUSDT">Solana</option>
            <option className='select-option' value="UNIUSDT">UniSwap</option>
            <option className='select-option' value="ALGOUSDT">Algo</option>
          </select>

          <button id="monBtn" className="button-crypto" onClick={handleButtonClick}>Track Price</button>
          {price && <p id="crypto-price" className="crypto-result">Le {crypto} est à {price} $</p>}
      </div>
    </>
  );
};

export default Home;
