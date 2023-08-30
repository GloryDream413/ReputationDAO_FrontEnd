import React from 'react';
import './collectemail.css';
import WalletConnectLogo from '../../assets/WalletConnectLogo.png'
import mainlogo from '../../assets/mainlogo.png'
import genesis_icon from '../../assets/genesis_icon.png'
import airdrop_icon from '../../assets/airdrop_icon.png'
import dao_icon from '../../assets/dao_icon.png'
import vector_icon from '../../assets/vector_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import telegram_icon from '../../assets/telegram_icon.png'
import connected_status_icon from '../../assets/connected_status.png'
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
      <div className='content'>
        <div className='walletinfo'>
            <div className='walletaddress'>
                <img src={connected_status_icon} alt="connected_status_icon"/>
                <h1>0x...43Js</h1>
            </div>
        </div>
        <div className='mainlogo'>
            <img src={mainlogo} alt="mainlogo"/>
        </div>
        <div className='title'>
            <h1>Launch the Reputation DAO by participating in the genesis vote.</h1>
        </div>
        <div className='description'>
            <h1>To begin, please enter your email address. This is used to keep you updated on important DAO activity only - we won’t spam!</h1>
        </div>
        <div className='email'>
            <input placeholder='Insert email address'></input>
        </div>
        <Link to="/principle"><button><h1>Next</h1></button></Link>
      </div>
    </div>
  );
};
export default Collectemail;