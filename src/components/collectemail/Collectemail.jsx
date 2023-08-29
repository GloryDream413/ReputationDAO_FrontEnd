import React from 'react';
import './collectemail.css';
import WalletConnectLogo from '../../assets/WalletConnectLogo.png'
import genesis_icon from '../../assets/genesis_icon.png'
import airdrop_icon from '../../assets/airdrop_icon.png'
import dao_icon from '../../assets/dao_icon.png'
import { Link } from 'react-router-dom';

export const Collectemail = () => {
  return (
    <div className="mainsection">
      <div className="walletconnect">
        <img src={WalletConnectLogo} alt="walletconnectlogo"/>
        <Link to="/collectemail"><button><h1>Connect Wallet</h1></button></Link>
        <div className='icons'>
          <img src={airdrop_icon} alt="airdrop"/>
          <img src={dao_icon} alt="dao"/>
          <img src={genesis_icon} alt="genesis"/>
        </div>
      </div>
    </div>
  );
};
export default Collectemail;