import React, { useContext } from 'react';
import './dashboard.css';
import WalletConnectLogo from '../../assets/WalletConnectLogo.png'
import genesis_icon from '../../assets/genesis_icon.png'
import airdrop_icon from '../../assets/airdrop_icon.png'
import dao_icon from '../../assets/dao_icon.png'
import { connectWallet } from '../../core/interact';
import { UserContext } from "../../App";
import { NotificationManager } from 'react-notifications';

export const Dashboard = () => {
  const { SetWalletAddress } = useContext(UserContext);
  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    if(walletResponse.address === '')
    {
      SetWalletAddress('');
      NotificationManager.warning('Please Install Metamask or Add Polygon Chain on your wallet.', 'Warning');
    }
    else
    {
      SetWalletAddress(walletResponse.address);
      NotificationManager.success('Connected Successfully.', 'Success');
    }
  };

  return (
    <div className="mainsection">
      <div className="walletconnect">
        <img src={WalletConnectLogo} alt="walletconnectlogo"/>
        <button onClick={connectWalletPressed}><h1>Connect Wallet</h1></button>
        <div className='icons'>
          <img src={airdrop_icon} alt="airdrop"/>
          <img src={dao_icon} alt="dao"/>
          <img src={genesis_icon} alt="genesis"/>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;