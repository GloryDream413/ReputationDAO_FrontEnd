import React from 'react';
import './principle.css';
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

export const Principle = () => {
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
            <h1>Next, pick your principles</h1>
        </div>
        <div className='description'>
            <h1>Principles are the values you really care about. Reputation DAO will ask you to rate a proposal on its alignment with the communities values. Your top 5 are in no particular order!</h1>
        </div>
        <div className='userselect'>
            <div className='userselectboard'>
                <div className='first'>
                    <h1>1.</h1>
                    <label></label>
                </div>
                <div className='second'>
                    <h1>2.</h1>
                    <label></label>
                </div>
                <div className='third'>
                    <h1>3.</h1>
                    <label></label>
                </div>
                <div className='fourth'>
                    <h1>4.</h1>
                    <label></label>
                </div>
                <div className='fifth'>
                    <h1>5.</h1>
                    <label></label>
                </div>
            </div>
        </div>
        <div className='items1'>
            <div className='item'>Sustainability</div>
            <div className='item'>Prosperity</div>
            <div className='item'>Security</div>
            <div className='item'>Collaboration</div>
            <div className='item'>Growth</div>
            <div className='item'>Improvement</div>
        </div>
        <div className='items2'>
            <div className='item'>Innovation</div>
            <div className='item'>Community</div>
            <div className='item'>Meaning</div>
            <div className='item'>Reputation</div>
            <div className='item'>Reliability</div>
            <div className='item'>Value</div>
        </div>
        <Link to="/criteria"><button><h1>Next</h1></button></Link>
      </div>
    </div>
  );
};
export default Principle;