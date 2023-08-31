import React, { useContext } from 'react';
import './criteria.css';
import WalletConnectLogo from '../../assets/WalletConnectLogo.png'
import mainlogo from '../../assets/mainlogo.png'
import genesis_icon from '../../assets/genesis_icon.png'
import airdrop_icon from '../../assets/airdrop_icon.png'
import dao_icon from '../../assets/dao_icon.png'
import vector_icon from '../../assets/vector_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import telegram_icon from '../../assets/telegram_icon.png'
import connected_status_icon from '../../assets/connected_status.png'
import general_check from '../../assets/general_check.png';
import general_cross from '../../assets/general_cross.png';
import { Link } from 'react-router-dom';
import { UserContext } from "../../App";

export const Criteria = () => {
  const { walletAddress } = useContext(UserContext);
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
                <h1>{walletAddress.substring(0, 4) + "..." + walletAddress.substring(walletAddress.length-2, walletAddress.length)}</h1>
            </div>
        </div>
        <div className='mainlogo'>
            <img src={mainlogo} alt="mainlogo"/>
        </div>
        <div className='title'>
            <h1>Lastly, pick your criteria</h1>
        </div>
        <div className='description'>
            <h1>The ReputationDAO has one objective: Generate returns for REPD holders by supporting the wider crypto ecosystem. The way that this mission is achieved entirely up to the community!</h1>
        </div>
        <div className='options'>
          <div className='option'>
            <h1>Commercialise reputation and verification services.</h1>
            <div className='checkbuttons'>
              <img src={general_check} alt="general_check"/>
              <img src={general_cross} alt="general_cross"/>
            </div>
          </div>
          <div className='option'>
            <h1>Provide liquidity to other protocols.</h1>
            <div className='checkbuttons'>
              <img src={general_check} alt="general_check"/>
              <img src={general_cross} alt="general_cross"/>
            </div>
          </div>
        </div>
        <div className='options'>
          <div className='option'>
            <h1>Utilise treasury funds in yield and staking.</h1>
            <div className='checkbuttons'>
              <img src={general_check} alt="general_check"/>
              <img src={general_cross} alt="general_cross"/>
            </div>
          </div>
          <div className='option'>
            <h1>Fund bad actor detection and bounty hunting.</h1>
            <div className='checkbuttons'>
              <img src={general_check} alt="general_check"/>
              <img src={general_cross} alt="general_cross"/>
            </div>
          </div>
        </div>
        <div className='options'>
          <div className='option'>
            <h1>Fund development of RDAO ecosystem.</h1>
            <div className='checkbuttons'>
              <img src={general_check} alt="general_check"/>
              <img src={general_cross} alt="general_cross"/>
            </div>
          </div>
          <div className='option'>
            <h1>Actively manage DAO as an investment fund.</h1>
            <div className='checkbuttons'>
              <img src={general_check} alt="general_check"/>
              <img src={general_cross} alt="general_cross"/>
            </div>
          </div>
        </div>
        <div className='options'>
          <div className='option'>
            <h1>Invest in early stage protocols.</h1>
            <div className='checkbuttons'>
              <img src={general_check} alt="general_check"/>
              <img src={general_cross} alt="general_cross"/>
            </div>
          </div>
          <div className='option'>
            <h1>Invest in NFT’s.</h1>
            <div className='checkbuttons'>
              <img src={general_check} alt="general_check"/>
              <img src={general_cross} alt="general_cross"/>
            </div>
          </div>
        </div>
        <button><Link to="/result"><h1>Submit</h1></Link></button>
      </div>
    </div>
  );
};
export default Criteria;