import React from 'react';
import './collectemail.css';
import WalletConnectLogo from '../../assets/WalletConnectLogo.png'
import genesis_icon from '../../assets/genesis_icon.png'
import airdrop_icon from '../../assets/airdrop_icon.png'
import dao_icon from '../../assets/dao_icon.png'
import vector_icon from '../../assets/vector_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import telegram_icon from '../../assets/telegram_icon.png'
import { Link } from 'react-router-dom';

export const Collectemail = () => {
  return (
    <div className="mainsection">
      <div className='menu'>
        <img src={WalletConnectLogo} alt="walletconnectlogo"/>
        <div className='genesis_icon'>
            <img src={genesis_icon} alt="genesis_icon"/>
            <h1>Genesis</h1>
        </div>
        <div className='dao_icon'>
            <img src={dao_icon} alt="dao_icon"/>
            <h1>DAO</h1>
        </div>
        <div className='airdrop_icon'>
            <img src={airdrop_icon} alt="airdrop_icon"/>
            <h1>Airdrop</h1>
        </div>
        <div className='social_icon'>
            <img src={vector_icon} alt="vector_icon"/>
            <img src={twitter_icon} alt="twitter_icon"/>
            <img src={telegram_icon} alt="telegram_icon"/>
        </div>
      </div>
      <div className='content'></div>
    </div>
  );
};
export default Collectemail;