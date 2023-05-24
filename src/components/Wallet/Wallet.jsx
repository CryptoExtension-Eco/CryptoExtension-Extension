import React from 'react'
import './Wallet.css'
import chip from '../img/chip.png'
import contactLess from '../img/wifi-signal.png'
import visa from '../img/visa.png'
const Wallet = () => {
  return (
    <>
        <div id="wallet"/>
            <div className="wallet" id='Wallet'>
              <p id="userWallet" className='text-lg text-gray-600 my-2 ethAdresse'></p>
              <div className="card1">
                <img className='chip' src={chip} alt="" />
                <img className='contactless' src={contactLess} alt="" />
                <img className='visa' src={visa} alt="" />
                <div className="arrow"></div>
                <p className="card-name"></p>
                <p className="bank-name"></p>
              </div>
            </div>
    </>
  )
}

export default Wallet
