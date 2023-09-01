import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';
import WalletConnectLogo from '../../assets/WalletConnectLogo.png'
import genesis_icon from '../../assets/genesis_icon.png'
import airdrop_icon from '../../assets/airdrop_icon.png'
import dao_icon from '../../assets/dao_icon.png'
import { connectWallet } from '../../core/interact';
import { UserContext } from "../../App";
import { toast } from 'react-toastify';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { SetWalletAddress } = useContext(UserContext);
  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    if(walletResponse.address === '')
    {
      SetWalletAddress('');
      toast.error('Not Connected.\n' + walletResponse.status);
    }
    else
    {
      SetWalletAddress(walletResponse.address);
      navigate("/collectemail");
    }
  };

  return (
    <div className="mainsection1">
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