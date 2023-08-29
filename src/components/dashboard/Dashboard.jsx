import React from 'react';
import './dashboard.css';
import WalletConnectLogo from '../../assets/WalletConnectLogo.png'

export const Dashboard = () => {
  return (
    <div className="mainsection">
      <div className="walletconnect">
        <img src={WalletConnectLogo}/>
        <button><h1>Connect Wallet</h1></button>
      </div>
    </div>
  );
};
export default Dashboard;