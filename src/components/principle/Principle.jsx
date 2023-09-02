import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
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
import { UserContext } from "../../App";
import { connectWallet } from '../../core/interact';
import { toast } from 'react-toastify';

export const Principle = () => {
  const navigate = useNavigate();
  const { walletAddress, SetWalletAddress } = useContext(UserContext);
  const { SetPrinciple1 } = useContext(UserContext);
  const { SetPrinciple2 } = useContext(UserContext);
  const { SetPrinciple3 } = useContext(UserContext);
  const { SetPrinciple4 } = useContext(UserContext);
  const { SetPrinciple5 } = useContext(UserContext);
  const [ isWrittenId, SetWrittenId] = useState(0);
  useEffect(()=>{
    const connectWalletPressed = async () => {
      const walletResponse = await connectWallet();
      SetWalletAddress(walletResponse.address);
    };
    connectWalletPressed();
  })

  const onClickItem = (event) => {
    if(isWrittenId === 5)
    {
        return;
    }
    else
    {
        document.getElementById(isWrittenId+1).textContent = event.target.id;
        if(isWrittenId === 0)
        {
            SetPrinciple1(event.target.id);
        }
        else if(isWrittenId === 1)
        {
            SetPrinciple2(event.target.id);
        }
        else if(isWrittenId === 2)
        {
            SetPrinciple3(event.target.id);
        }
        else if(isWrittenId === 3)
        {
            SetPrinciple4(event.target.id);
        }
        else if(isWrittenId === 4)
        {
            SetPrinciple5(event.target.id);
        }
        SetWrittenId(isWrittenId+1);
    }
  }

  const onSavingPrinciple = () => {
    if(isWrittenId < 5)
    {
        toast.error('Please select 5 items.');
        return;
    }
    else
    {
        navigate("/criteria");
    }
  }

  return (
    <div className="mainsection">
      <div className='menu'>
        <img src={WalletConnectLogo} alt="walletconnectlogo"/>
        <div className='menuitems'>
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
            <h1>Next, pick your principles</h1>
        </div>
        <div className='description'>
            <h1>Principles are the values you really care about. Reputation DAO will ask you to rate a proposal on its alignment with the communities values. Your top 5 are in no particular order!</h1>
        </div>
        <div className='userselect'>
            <div className='userselectboard'>
                <div className='first'>
                    <h1>1.</h1>
                    <label id="1"></label>
                </div>
                <div className='second'>
                    <h1>2.</h1>
                    <label id="2"></label>
                </div>
                <div className='third'>
                    <h1>3.</h1>
                    <label id="3"></label>
                </div>
                <div className='fourth'>
                    <h1>4.</h1>
                    <label id="4"></label>
                </div>
                <div className='fifth'>
                    <h1>5.</h1>
                    <label id="5"></label>
                </div>
            </div>
        </div>
        <div className='items1'>
            <div className='item' id="Sustainability" onClick={onClickItem}>Sustainability</div>
            <div className='item' id="Prosperity" onClick={onClickItem}>Prosperity</div>
            <div className='item' id="Security" onClick={onClickItem}>Security</div>
            <div className='item' id="Collaboration" onClick={onClickItem}>Collaboration</div>
            <div className='item' id="Growth" onClick={onClickItem}>Growth</div>
            <div className='item' id="Improvement" onClick={onClickItem}>Improvement</div>
        </div>
        <div className='items2'>
            <div className='item' id="Innovation" onClick={onClickItem}>Innovation</div>
            <div className='item' id="Community" onClick={onClickItem}>Community</div>
            <div className='item' id="Meaning" onClick={onClickItem}>Meaning</div>
            <div className='item' id="Reputation" onClick={onClickItem}>Reputation</div>
            <div className='item' id="Reliability" onClick={onClickItem}>Reliability</div>
            <div className='item' id="Value" onClick={onClickItem}>Value</div>
        </div>
        <button onClick={onSavingPrinciple}><h1>Next</h1></button>
      </div>
    </div>
  );
};
export default Principle;