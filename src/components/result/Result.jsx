import React, { useContext, useEffect } from 'react';
import './result.css';
import WalletConnectLogo from '../../assets/WalletConnectLogo.png'
import mainlogo from '../../assets/mainlogo.png'
import genesis_icon from '../../assets/genesis_icon.png'
import airdrop_icon from '../../assets/airdrop_icon.png'
import dao_icon from '../../assets/dao_icon.png'
import vector_icon from '../../assets/vector_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import telegram_icon from '../../assets/telegram_icon.png'
import connected_status_icon from '../../assets/connected_status.png'
import confirm_check from '../../assets/confirm_check.png';
import confirm_cross from '../../assets/confirm_cross.png';
import clock_icon from '../../assets/clock_icon.png';
import { Link } from 'react-router-dom';
import { UserContext } from "../../App";
import { connectWallet } from '../../core/interact';

export const Result = () => {
  const { walletAddress, SetWalletAddress } = useContext(UserContext);
  useEffect(()=>{
    const connectWalletPressed = async () => {
      const walletResponse = await connectWallet();
      SetWalletAddress(walletResponse.address);
    };
    connectWalletPressed();
  })
  return (
    <div className="mainsection">
      <div className='menu'>
        <img src={WalletConnectLogo} alt="walletconnectlogo"/>
        <Link to="/collectemail">
        <div className='genesis_icon'>
            <img src={genesis_icon} alt="genesis_icon"/>
            <h1>Genesis</h1>
        </div>
        </Link>
        <Link to="/coming">
        <div className='dao_icon'>
            <img src={dao_icon} alt="dao_icon"/>
            <h1>DAO</h1>
        </div>
        </Link>
        <Link to="/coming">
        <div className='airdrop_icon'>
            <img src={airdrop_icon} alt="airdrop_icon"/>
            <h1>Airdrop</h1>
        </div>
        </Link>
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
                <h1>{walletAddress.substring(0, 4) + "..." + walletAddress.substring(walletAddress.length-2, walletAddress.length)}</h1>
            </div>
        </div>
        <div className='mainlogo'>
            <img src={mainlogo} alt="mainlogo"/>
        </div>
        <div className='title'>
            <h1>Results</h1>
        </div>
        <div className='description'>
            <h1>Once votes have been collected, the DAO will be open for proposals and use these principles and criteria to evaluate proposals!</h1>
        </div>
        <div className='timelabel'>
          <h1>Genesis ends in:</h1> 
        </div>
        <div className='timedialog'>
          <div className='timedialogdisplay'>
            <img src={clock_icon} alt="clock_icon"/>
            <h1>24D, 2h, 15m, 11s</h1>
          </div>
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
        <div className='options'>
          <div className='option'>
            <h1>Commercialise reputation and verification services.</h1>
            <div className='checkbuttons'>
              <img src={confirm_check} alt="confirm_check"/>
              <h1>75%</h1>
            </div>
          </div>
          <div className='option'>
            <h1>Provide liquidity to other protocols.</h1>
            <div className='checkbuttons'>
              <img src={confirm_check} alt="confirm_check"/>
              <h1>75%</h1>
            </div>
          </div>
        </div>
        <div className='options'>
          <div className='option'>
            <h1>Utilise treasury funds in yield and staking.</h1>
            <div className='checkbuttons'>
              <h1>55%</h1>
              <img src={confirm_cross} alt="confirm_cross"/>
            </div>
          </div>
          <div className='option'>
            <h1>Fund bad actor detection and bounty hunting.</h1>
            <div className='checkbuttons'>
              <h1>55%</h1>
              <img src={confirm_cross} alt="confirm_cross"/>
            </div>
          </div>
        </div>
        <div className='options'>
          <div className='option'>
            <h1>Fund development of RDAO ecosystem.</h1>
            <div className='checkbuttons'>
              <img src={confirm_check} alt="confirm_check"/>
              <h1>75%</h1>
            </div>
          </div>
          <div className='option'>
            <h1>Actively manage DAO as an investment fund.</h1>
            <div className='checkbuttons'>
              <img src={confirm_check} alt="confirm_check"/>
              <h1>75%</h1>
            </div>
          </div>
        </div>
        <div className='options'>
          <div className='option'>
            <h1>Invest in early stage protocols.</h1>
            <div className='checkbuttons'>
              <h1>55%</h1>
              <img src={confirm_cross} alt="confirm_cross"/>
            </div>
          </div>
          <div className='option'>
            <h1>Invest in NFT’s.</h1>
            <div className='checkbuttons'>
              <h1>55%</h1>
              <img src={confirm_cross} alt="confirm_cross"/>
            </div>
          </div>
        </div>
        <br></br>
      </div>
    </div>
  );
};
export default Result;