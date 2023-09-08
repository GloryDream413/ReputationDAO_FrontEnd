import React, { useContext, useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import './collectemail.css';
import { useNavigate } from 'react-router-dom';
import WalletConnectLogo from '../../assets/WalletConnectLogo.png'
import mainlogo from '../../assets/mainlogo.png'
import genesis_icon from '../../assets/genesis_icon.png'
import airdrop_icon from '../../assets/airdrop_icon.png'
import dao_icon from '../../assets/dao_icon.png'
import vector_icon from '../../assets/vector_icon.svg'
import twitter_icon from '../../assets/twitter_icon.svg'
import telegram_icon from '../../assets/telegram_icon.svg'
import menu_button from '../../assets/menu_button.svg'
import connected_status_icon from '../../assets/connected_status.png'
import { Link } from 'react-router-dom';
import { UserContext } from "../../App";
import { connectWallet } from '../../core/interact';
import { toast } from 'react-toastify';

export const Collectemail = () => {
  const navigate = useNavigate();
  const { walletAddress, SetWalletAddress } = useContext(UserContext);
  const [isOpen, SetMenuButtonStatus] = useState(false);

  const handleKeyDown = (event) => {console.log ("FFFFFFFFFF")
    if (event.keyCode === 13) {
      // Enter key was pressed
      event.preventDefault(); // Prevent form submission
      // Call your submit function here
      onSavingEmail();
    }
  };

  useEffect(()=>{
    const connectWalletPressed = async () => {
      const walletResponse = await connectWallet();
      SetWalletAddress(walletResponse.address);
    };
    connectWalletPressed();
  })

  const { email, SetEmail } = useContext(UserContext);
  const onEmailChange = (event) => {
    SetEmail(event.target.value);
  };

  const onSavingEmail = () => {
    if(email === '')
    {
      toast.error('Please input email');
      return;
    }

    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (email.trim().length === 0 || email.match(isValidEmail) === null) {
      toast.error("Email address value is invalid. Please try again")
      return;
    }
    else
    {
      navigate("/principle");
    }
  }

  const onMenuButtonClick = () => {
    SetMenuButtonStatus(!isOpen);
  }

  const below600 = useMedia('(max-width: 1000px)')
  return (
    <div>
      {!below600 && (
      <div className="mainsection">
        <div className='menu'>
          <div className='logoitem'>
            <img src={WalletConnectLogo} alt="walletconnectlogo"/>
            <div className='menuitems'>
              <Link to="/collectemail">
              <div className='genesis_icon'>
                  <img src={genesis_icon} alt="genesis_icon"/>
                  <h1>Genesis</h1>
              </div>
              </Link>
              <div className='dao_icon'>
                  <img src={dao_icon} alt="dao_icon"/>
                  <h1>DAO</h1>
              </div>
              <div className='airdrop_icon'>
                  <img src={airdrop_icon} alt="airdrop_icon"/>
                  <h1>Airdrop</h1>
              </div>
            </div>
          </div>
          <div className='social_icon'>
              <a href="https://docs.reputationdao.co/" target="_blank" rel="noopener noreferrer"><img src={vector_icon} alt="vector_icon"/></a>
              <a href="https://twitter.com/ReputationDAO" target="_blank" rel="noopener noreferrer"><img src={twitter_icon} alt="twitter_icon"/></a>
              <a href="https://discord.gg/qz4YNZNkHN" target="_blank" rel="noopener noreferrer"><img src={telegram_icon} alt="telegram_icon"/></a>
          </div>
        </div>
        <div className='content'>
          <div className='real-content'>
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
                <h1>Launch the Reputation DAO by participating in the genesis vote.</h1>
            </div>
            <div className='description'>
                <h1>To begin, please enter your email address. This is used to keep you updated on important DAO activity only - we won’t spam!</h1>
            </div>
            <div className='email'>
                <input 
                  placeholder='Insert email address'
                  value={email}
                  onChange={onEmailChange}
                  onKeyDown={handleKeyDown}
                />
            </div>
          </div>
          <div className='buttoncontent'>
            <button className="scale-105" onClick={onSavingEmail}><h1>Next</h1></button>
          </div>
        </div>
      </div>
      )}
      {below600 && (
      <div className="mainsection_mobile">
        <div className='menu_mobile'>
          <div className='menu_button'>
            <img src={menu_button} alt="menu_button" onClick={onMenuButtonClick}/>
            <div className='logoitem'>
              <img src={mainlogo} alt="mainlogo"/>
            </div>
            <div className='walletinfo'>
                <div className='walletaddress'>
                    <img src={connected_status_icon} alt="connected_status_icon"/>
                    <h1>{walletAddress.substring(0, 4) + "..." + walletAddress.substring(walletAddress.length-2, walletAddress.length)}</h1>
                </div>
            </div>
          </div>
          {isOpen && (
          <div className='menu'>
            <div className='menuitems py-1'>
                <Link to="/collectemail">
                <div className='genesis_icon'>
                    <img src={genesis_icon} alt="genesis_icon"/>
                    <h1>Genesis</h1>
                </div>
                </Link>
                <div className='dao_icon'>
                    <img src={dao_icon} alt="dao_icon"/>
                    <h1>DAO</h1>
                </div>
                <div className='airdrop_icon'>
                    <img src={airdrop_icon} alt="airdrop_icon"/>
                    <h1>Airdrop</h1>
                </div>
            </div>
            <div className='social_icon'>
              <a href="https://docs.reputationdao.co/" target="_blank" rel="noopener noreferrer"><img src={vector_icon} alt="vector_icon"/></a>
              <a href="https://twitter.com/ReputationDAO" target="_blank" rel="noopener noreferrer"><img src={twitter_icon} alt="twitter_icon"/></a>
              <a href="https://discord.gg/qz4YNZNkHN" target="_blank" rel="noopener noreferrer"><img src={telegram_icon} alt="telegram_icon"/></a>
            </div>
          </div>
          )}
        </div>
        <div className='content'>
          <div className='real-content'>
            <div className='title'>
                <h1>Launch the Reputation DAO by participating in the genesis vote.</h1>
            </div>
            <div className='description'>
                <h1>To begin, please enter your email address. This is used to keep you updated on important DAO activity only - we won’t spam!</h1>
            </div>
            <div className='email'>
                <input 
                  placeholder='Insert email address'
                  value={email}
                  onChange={onEmailChange}
                  onKeyDown={handleKeyDown}
                />
            </div>
          </div>
          <div className='buttoncontent'>
            <button className="scale-105" onClick={onSavingEmail}><h1>Next</h1></button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};
export default Collectemail;