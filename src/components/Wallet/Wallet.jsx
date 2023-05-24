import React from 'react'
import './Wallet.css'
import chip from '../img/chip.png'
import contactLess from '../img/wifi-signal.png'
import visa from '../img/visa.png'
const Wallet = () => {
  return (
    <>
         <div className="wallet" id="Wallet">
                    <p id="userWallet" className="text-lg text-gray-600 my-2 ethAdresse"></p>
                    <div className="card-container">
                        <div className="card1">
                            <img className="chip" src={chip}alt=""/>
                            <img className="contactless" src={contactLess} alt=""/>
                            <img className="visa" src={visa} alt="" />
                            <p id="test" className="card-number">tqt</p>
                            <div className="arrow">
                            </div>
                            <p className="card-name">Ethereum</p>
                            <p className="bank-name">CryptoBank</p>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default Wallet
