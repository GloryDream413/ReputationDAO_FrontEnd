import React, { useContext, useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import './result.css';
import WalletConnectLogo from '../../assets/WalletConnectLogo.png'
import mainlogo from '../../assets/mainlogo.png'
import genesis_icon from '../../assets/genesis_icon.png'
import airdrop_icon from '../../assets/airdrop_icon.png'
import dao_icon from '../../assets/dao_icon.png'
import vector_icon from '../../assets/vector_icon.svg'
import twitter_icon from '../../assets/twitter_icon.svg'
import telegram_icon from '../../assets/telegram_icon.svg'
import connected_status_icon from '../../assets/connected_status.png'
import confirm_check from '../../assets/confirm_check.png';
import confirm_cross from '../../assets/confirm_cross.png';
import clock_icon from '../../assets/clock_icon.png';
import menu_button from '../../assets/menu_button.svg'
import { Link } from 'react-router-dom';
import { UserContext } from "../../App";
import { connectWallet } from '../../core/interact';
import * as env from "../../env";
import axios from 'axios';
import { toast } from 'react-toastify';

export const Result = () => {
  const { walletAddress, SetWalletAddress } = useContext(UserContext);
  const [isOpen, SetMenuButtonStatus] = useState(false);
  const [ seconds, setSeconds ] = useState(30 * 24 * 60 * 60);
  useEffect(()=>{
    const connectWalletPressed = async () => {
      const walletResponse = await connectWallet();
      SetWalletAddress(walletResponse.address);
    };
    connectWalletPressed();
  })

  useEffect(()=>{
    const getGensisTime = async () => {
      try {
        const response = await axios.get(`${env.API_URL}/genesis/get_selection_time`);
        if(response.status === 200)
        {
          const currentDate = new Date().getTime() / 1000;
          setSeconds(parseInt(response.data.data - currentDate));
        }
        else
        {
          toast.error('Failed Getting Gensis Time');
        }
      } catch (error) {
        toast.error('Error Getting Gensis Time:' + error);
      }
    };
    getGensisTime();
  }, [])

  useEffect(()=>{
    const getResult = async () => {
      try {
        const response = await axios.get(`${env.API_URL}/genesis/get_result`);
        if(response.status === 200)
        {
          console.log(response.data.data[0].criteria);
          document.getElementById("1").textContent = response.data.data[0].principles[0];
          document.getElementById("2").textContent = response.data.data[0].principles[1];
          document.getElementById("3").textContent = response.data.data[0].principles[2];
          document.getElementById("4").textContent = response.data.data[0].principles[3];
          document.getElementById("5").textContent = response.data.data[0].principles[4];

          Object.keys(response.data.data[0].criteria).forEach(key => {
            const value = response.data.data[0].criteria[key];
            if(value[0] === "Yes")
            {
              document.getElementById(key).innerHTML = "";
              document.getElementById(key).innerHTML += '<img src="' + confirm_check + '" />';
              document.getElementById(key).innerHTML += '<h2>'+ value[1]*100 +'%</h2>';
            }
            else if(value[0] === "No")
            {
              document.getElementById(key).innerHTML = "";
              document.getElementById(key).innerHTML += '<h2>'+ value[1]*100 +'%</h2>';
              document.getElementById(key).innerHTML += '<img src="' + confirm_cross + '" />';
            }
          });
        }
        else
        {
          toast.error('Failed Getting Result');
        }
      } catch (error) {
        toast.error('Error Getting Result:' + error);
      }
    };
    getResult();
  }, [])

  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      if(seconds !== 0)
      {
        setSeconds(seconds - 1);
      }
    }, 1000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [seconds]);

  const onMenuButtonClick = () => {
    SetMenuButtonStatus(!isOpen);
  }
  
  const below600 = useMedia('(max-width: 600px)')
  return (
    <div>
      {!below600 && (
      <div className="mainsection2">
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
              <a href="https://docs.reputationdao.co/"><img src={vector_icon} alt="vector_icon"/></a>
              <a href="https://twitter.com/ReputationDAO"><img src={twitter_icon} alt="twitter_icon"/></a>
              <a href="https://discord.gg/qz4YNZNkHN"><img src={telegram_icon} alt="telegram_icon"/></a>
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
                <h1>{parseInt(seconds/(24*60*60))}D, {parseInt((seconds - parseInt(seconds/(24*60*60))*(24*60*60))/(60*60))}h, {parseInt((seconds - parseInt(seconds/(24*60*60))*24*60*60 - parseInt((seconds - parseInt(seconds/(24*60*60))*(24*60*60))/(60*60))* 60*60)/60)}m, {seconds - parseInt(seconds/(24*60*60))*(24*60*60) - parseInt((seconds - parseInt(seconds/(24*60*60))*(24*60*60))/(60*60))*(60*60) - parseInt((seconds - parseInt(seconds/(24*60*60))*24*60*60 - parseInt((seconds - parseInt(seconds/(24*60*60))*(24*60*60))/(60*60))* 60*60)/60)*60}s</h1>
              </div>
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
            <div className='options'>
              <div className='option'>
                <h1>Commercialise reputation and verification services.</h1>
                <div className='checkbuttons' id="Commercialise reputation and verification services.">
                </div>
              </div>
              <div className='option'>
                <h1>Provide liquidity to other protocols.</h1>
                <div className='checkbuttons' id="Provide liquidity to other protocols.">
                </div>
              </div>
            </div>
            <div className='options'>
              <div className='option'>
                <h1>Utilise treasury funds in yield and staking.</h1>
                <div className='checkbuttons' id="Utilise treasury funds in yield and staking.">
                </div>
              </div>
              <div className='option'>
                <h1>Fund bad actor detection and bounty hunting.</h1>
                <div className='checkbuttons' id="Fund bad actor detection and bounty hunting.">
                </div>
              </div>
            </div>
            <div className='options'>
              <div className='option'>
                <h1>Fund development of RDAO ecosystem.</h1>
                <div className='checkbuttons' id="Fund development of RDAO ecosystem.">
                </div>
              </div>
              <div className='option'>
                <h1>Actively manage DAO as an investment fund.</h1>
                <div className='checkbuttons' id="Actively manage DAO as an investment fund.">
                </div>
              </div>
            </div>
            <div className='options'>
              <div className='option'>
                <h1>Invest in early stage protocols.</h1>
                <div className='checkbuttons' id="Invest in early stage protocols.">
                </div>
              </div>
              <div className='option'>
                <h1>Invest in NFT’s.</h1>
                <div className='checkbuttons' id="Invest in NFT’s.">
                </div>
              </div>
            </div>
          </div>
          <div className='buttoncontent'>
          </div>
        </div>
      </div>
      )}
      {below600 && (
      <div className="mainsection1_mobile">
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
            <div className='social_icon'>
              <a href="https://docs.reputationdao.co/"><img src={vector_icon} alt="vector_icon"/></a>
              <a href="https://twitter.com/ReputationDAO"><img src={twitter_icon} alt="twitter_icon"/></a>
              <a href="https://discord.gg/qz4YNZNkHN"><img src={telegram_icon} alt="telegram_icon"/></a>
            </div>
          </div>
          )}
        </div>
        <div className='content'>
          <div className='real-content'>
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
                <h1>{parseInt(seconds/(24*60*60))}D, {parseInt((seconds - parseInt(seconds/(24*60*60))*(24*60*60))/(60*60))}h, {parseInt((seconds - parseInt(seconds/(24*60*60))*24*60*60 - parseInt((seconds - parseInt(seconds/(24*60*60))*(24*60*60))/(60*60))* 60*60)/60)}m, {seconds - parseInt(seconds/(24*60*60))*(24*60*60) - parseInt((seconds - parseInt(seconds/(24*60*60))*(24*60*60))/(60*60))*(60*60) - parseInt((seconds - parseInt(seconds/(24*60*60))*24*60*60 - parseInt((seconds - parseInt(seconds/(24*60*60))*(24*60*60))/(60*60))* 60*60)/60)*60}s</h1>
              </div>
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
            <br></br>
            <div className='options'>
              <div className='option'>
                <h1>Commercialise reputation and verification services.</h1>
                <div className='checkbuttons' id="Commercialise reputation and verification services.">
                </div>
              </div>
            </div>
            <div className='options'>
              <div className='option'>
                <h1>Provide liquidity to other protocols.</h1>
                <div className='checkbuttons' id="Provide liquidity to other protocols.">
                </div>
              </div>
            </div>
            <div className='options'>
              <div className='option'>
                <h1>Utilise treasury funds in yield and staking.</h1>
                <div className='checkbuttons' id="Utilise treasury funds in yield and staking.">
                </div>
              </div>
            </div>
            <div className='options'>
              <div className='option'>
                <h1>Fund bad actor detection and bounty hunting.</h1>
                <div className='checkbuttons' id="Fund bad actor detection and bounty hunting.">
                </div>
              </div>
            </div>
            <div className='options'>
              <div className='option'>
                <h1>Fund development of RDAO ecosystem.</h1>
                <div className='checkbuttons' id="Fund development of RDAO ecosystem.">
                </div>
              </div>
            </div>
            <div className='options'>
              <div className='option'>
                <h1>Actively manage DAO as an investment fund.</h1>
                <div className='checkbuttons' id="Actively manage DAO as an investment fund.">
                </div>
              </div>
            </div>
            <div className='options'>
              <div className='option'>
                <h1>Invest in early stage protocols.</h1>
                <div className='checkbuttons' id="Invest in early stage protocols.">
                </div>
              </div>
            </div>
            <div className='options'>
              <div className='option'>
                <h1>Invest in NFT’s.</h1>
                <div className='checkbuttons' id="Invest in NFT’s.">
                </div>
              </div>
            </div>
          </div>
          <br/>
        </div>
      </div>
      )}
    </div>
  );
};
export default Result;