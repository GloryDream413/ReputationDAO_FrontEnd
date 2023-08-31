import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import confirm_check from '../../assets/confirm_check.png';
import general_cross from '../../assets/general_cross.png';
import confirm_cross from '../../assets/confirm_cross.png';
import { Link } from 'react-router-dom';
import { UserContext } from "../../App";
import { connectWallet } from '../../core/interact';
import { toast } from 'react-toastify';

export const Criteria = () => {
  const navigate = useNavigate();
  const { walletAddress, SetWalletAddress } = useContext(UserContext);
  const { email } = useContext(UserContext);
  const { principle1 } = useContext(UserContext);
  const { principle2 } = useContext(UserContext);
  const { principle3 } = useContext(UserContext);
  const { principle4 } = useContext(UserContext);
  const { principle5 } = useContext(UserContext);
  const [ item1Status, SetItem1Status ] = useState(0);
  const [ item2Status, SetItem2Status ] = useState(0);
  const [ item3Status, SetItem3Status ] = useState(0);
  const [ item4Status, SetItem4Status ] = useState(0);
  const [ item5Status, SetItem5Status ] = useState(0);
  const [ item6Status, SetItem6Status ] = useState(0);
  const [ item7Status, SetItem7Status ] = useState(0);
  const [ item8Status, SetItem8Status ] = useState(0);

  useEffect(()=>{
    const connectWalletPressed = async () => {
      const walletResponse = await connectWallet();
      SetWalletAddress(walletResponse.address);
    };
    connectWalletPressed();
  })

  const onCheckItem1 = () => {
    SetItem1Status(1);
  }

  const onCrossItem1 = () => {
    SetItem1Status(2);
  }

  const onCheckItem2 = () => {
    SetItem2Status(1);
  }

  const onCrossItem2 = () => {
    SetItem2Status(2);
  }

  const onCheckItem3 = () => {
    SetItem3Status(1);
  }

  const onCrossItem3 = () => {
    SetItem3Status(2);
  }

  const onCheckItem4 = () => {
    SetItem4Status(1);
  }

  const onCrossItem4 = () => {
    SetItem4Status(2);
  }

  const onCheckItem5 = () => {
    SetItem5Status(1);
  }

  const onCrossItem5 = () => {
    SetItem5Status(2);
  }

  const onCheckItem6 = () => {
    SetItem6Status(1);
  }

  const onCrossItem6 = () => {
    SetItem6Status(2);
  }

  const onCheckItem7 = () => {
    SetItem7Status(1);
  }

  const onCrossItem7 = () => {
    SetItem7Status(2);
  }

  const onCheckItem8 = () => {
    SetItem8Status(1);
  }

  const onCrossItem8 = () => {
    SetItem8Status(2);
  }

  const isVote = ["", "Yes", "No"];

  const onSubmit = async () => {
    if(!item1Status || !item2Status || !item3Status || !item4Status || !item5Status || !item6Status || !item7Status || !item8Status)
    {
      toast.error("Please check all items.");
      return;
    }
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
  
      const message = "Hello, MetaMask!";
      const signature = await window.ethereum.request({
        method: 'personal_sign',
        params: [message, account],
      });
  
      console.log("Message:", message);
      console.log("Signature:", signature);
      const data = {
        address: walletAddress,
        email: email,
        principles: [principle1, principle2, principle3, principle4, principle5],
        criteria: {
          "Commercialise reputation and verification services.": isVote[item1Status],
          "Provide liquidity to other protocols.": isVote[item2Status],
          "Utilise treasury funds in yield and staking.": isVote[item3Status],
          "Fund bad actor detection and bounty hunting.": isVote[item4Status],
          "Fund development of RDAO ecosystem.": isVote[item5Status],
          "Actively manage DAO as an investment fund.": isVote[item6Status],
          "Invest in early stage protocols.": isVote[item7Status],
          "Invest in NFT’s.": isVote[item8Status]
        }
      }

      console.log(data);
      navigate("/result");
    } catch (error) {
      console.error("Error signing message:", error);
    }
  }

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
            <h1>Lastly, pick your criteria</h1>
        </div>
        <div className='description'>
            <h1>The ReputationDAO has one objective: Generate returns for REPD holders by supporting the wider crypto ecosystem. The way that this mission is achieved entirely up to the community!</h1>
        </div>
        <div className='options'>
          <div className='option'>
            <h1>Commercialise reputation and verification services.</h1>
            <div className='checkbuttons'>
              {item1Status === 1 && (
                <img src={confirm_check} alt="confirm_check"/>
              )}
              {item1Status !== 1 && (
                <img src={general_check} alt="general_check" onClick={onCheckItem1}/>
              )}
              {item1Status === 2 && (
                <img src={confirm_cross} alt="confirm_cross"/>
              )}
              {item1Status !== 2 && (
                <img src={general_cross} alt="general_cross" onClick={onCrossItem1}/>
              )}
            </div>
          </div>
          <div className='option'>
            <h1>Provide liquidity to other protocols.</h1>
            <div className='checkbuttons'>
              {item2Status === 1 && (
                <img src={confirm_check} alt="confirm_check"/>
              )}
              {item2Status !== 1 && (
                <img src={general_check} alt="general_check" onClick={onCheckItem2}/>
              )}
              {item2Status === 2 && (
                <img src={confirm_cross} alt="confirm_cross"/>
              )}
              {item2Status !== 2 && (
                <img src={general_cross} alt="general_cross" onClick={onCrossItem2}/>
              )}
            </div>
          </div>
        </div>
        <div className='options'>
          <div className='option'>
            <h1>Utilise treasury funds in yield and staking.</h1>
            <div className='checkbuttons'>
              {item3Status === 1 && (
                <img src={confirm_check} alt="confirm_check"/>
              )}
              {item3Status !== 1 && (
                <img src={general_check} alt="general_check" onClick={onCheckItem3}/>
              )}
              {item3Status === 2 && (
                <img src={confirm_cross} alt="confirm_cross"/>
              )}
              {item3Status !== 2 && (
                <img src={general_cross} alt="general_cross" onClick={onCrossItem3}/>
              )}
            </div>
          </div>
          <div className='option'>
            <h1>Fund bad actor detection and bounty hunting.</h1>
            <div className='checkbuttons'>
              {item4Status === 1 && (
                <img src={confirm_check} alt="confirm_check"/>
              )}
              {item4Status !== 1 && (
                <img src={general_check} alt="general_check" onClick={onCheckItem4}/>
              )}
              {item4Status === 2 && (
                <img src={confirm_cross} alt="confirm_cross"/>
              )}
              {item4Status !== 2 && (
                <img src={general_cross} alt="general_cross" onClick={onCrossItem4}/>
              )}
            </div>
          </div>
        </div>
        <div className='options'>
          <div className='option'>
            <h1>Fund development of RDAO ecosystem.</h1>
            <div className='checkbuttons'>
              {item5Status === 1 && (
                <img src={confirm_check} alt="confirm_check"/>
              )}
              {item5Status !== 1 && (
                <img src={general_check} alt="general_check" onClick={onCheckItem5}/>
              )}
              {item5Status === 2 && (
                <img src={confirm_cross} alt="confirm_cross"/>
              )}
              {item5Status !== 2 && (
                <img src={general_cross} alt="general_cross" onClick={onCrossItem5}/>
              )}
            </div>
          </div>
          <div className='option'>
            <h1>Actively manage DAO as an investment fund.</h1>
            <div className='checkbuttons'>
              {item6Status === 1 && (
                <img src={confirm_check} alt="confirm_check"/>
              )}
              {item6Status !== 1 && (
                <img src={general_check} alt="general_check" onClick={onCheckItem6}/>
              )}
              {item6Status === 2 && (
                <img src={confirm_cross} alt="confirm_cross"/>
              )}
              {item6Status !== 2 && (
                <img src={general_cross} alt="general_cross" onClick={onCrossItem6}/>
              )}
            </div>
          </div>
        </div>
        <div className='options'>
          <div className='option'>
            <h1>Invest in early stage protocols.</h1>
            <div className='checkbuttons'>
              {item7Status === 1 && (
                <img src={confirm_check} alt="confirm_check"/>
              )}
              {item7Status !== 1 && (
                <img src={general_check} alt="general_check" onClick={onCheckItem7}/>
              )}
              {item7Status === 2 && (
                <img src={confirm_cross} alt="confirm_cross"/>
              )}
              {item7Status !== 2 && (
                <img src={general_cross} alt="general_cross" onClick={onCrossItem7}/>
              )}
            </div>
          </div>
          <div className='option'>
            <h1>Invest in NFT’s.</h1>
            <div className='checkbuttons'>
              {item8Status === 1 && (
                <img src={confirm_check} alt="confirm_check"/>
              )}
              {item8Status !== 1 && (
                <img src={general_check} alt="general_check" onClick={onCheckItem8}/>
              )}
              {item8Status === 2 && (
                <img src={confirm_cross} alt="confirm_cross"/>
              )}
              {item8Status !== 2 && (
                <img src={general_cross} alt="general_cross" onClick={onCrossItem8}/>
              )}
            </div>
          </div>
        </div>
        <button onClick={onSubmit}><h1>Submit</h1></button>
      </div>
    </div>
  );
};
export default Criteria;