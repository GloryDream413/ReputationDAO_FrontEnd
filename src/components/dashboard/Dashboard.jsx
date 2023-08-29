import React from 'react';
import './dashboard.css';
import WalletConnectLogo from '../../assets/WalletConnectLogo.png'

export const Dashboard = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <div className="original">
          <img src={WalletConnectLogo} alt="ai" />
        </div>
      </div>
    </div>
  );
};
export default Dashboard;