import React from 'react';
import './dashboard.css';
import WalletConnectLogo from '../../assets/WalletConnectLogo.png'
import genesis_icon from '../../assets/genesis_icon.png'
import airdrop_icon from '../../assets/airdrop_icon.png'
import dao_icon from '../../assets/dao_icon.png'

export const Dashboard = () => {
  return (
    <div className="mainsection">
      <div className="walletconnect">
        <img src={WalletConnectLogo}/>
        <button><h1>Connect Wallet</h1></button>
        <div className='icons'>
          <img src={airdrop_icon}/>
          <img src={dao_icon}/>
          <img src={genesis_icon}/>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;