import React, {useContext, useEffect, useState } from 'react';
import { useMedia } from 'react-use';
import { useNavigate } from 'react-router-dom';
import './principle.css';
import WalletConnectLogo from '../../assets/WalletConnectLogo.png'
import mainlogo from '../../assets/mainlogo.png'
import genesis_icon from '../../assets/genesis_icon.png'
import airdrop_icon from '../../assets/airdrop_icon.png'
import dao_icon from '../../assets/dao_icon.png'
import vector_icon from '../../assets/vector_icon.svg'
import twitter_icon from '../../assets/twitter_icon.svg'
import telegram_icon from '../../assets/telegram_icon.svg'
import connected_status_icon from '../../assets/connected_status.png'
import menu_button from '../../assets/menu_button.svg'
import { Link } from 'react-router-dom';
import { UserContext } from "../../App";
import { connectWallet } from '../../core/interact';
import { toast } from 'react-toastify';

export const Principle = () => {
  const [isOpen, SetMenuButtonStatus] = useState(false);
  const navigate = useNavigate();
  const { walletAddress, SetWalletAddress } = useContext(UserContext);
  const { SetPrinciple1 } = useContext(UserContext);
  const { SetPrinciple2 } = useContext(UserContext);
  const { SetPrinciple3 } = useContext(UserContext);
  const { SetPrinciple4 } = useContext(UserContext);
  const { SetPrinciple5 } = useContext(UserContext);
  useEffect(()=>{
    const connectWalletPressed = async () => {
      const walletResponse = await connectWallet();
      SetWalletAddress(walletResponse.address);
    };
    connectWalletPressed();
  })

  const onClickItem = (event) => {
    for(let j=1;j<=5;j++)
    {
      if(document.getElementById(j).textContent === event.target.id)
      {
        return;
      }
    }

    for(let i=1;i<=5;i++)
    {
        if(document.getElementById(i).textContent === '')
        {
            document.getElementById(i).textContent = event.target.id;
            return;
        }
    }
  }

  const onClickFirst = () => {
    document.getElementById(1).textContent = "";
  }

  const onClickSecond = () => {
    document.getElementById(2).textContent = "";
  }

  const onClickThird = () => {
    document.getElementById(3).textContent = "";
  }

  const onClickFourth = () => {
    document.getElementById(4).textContent = "";
  }

  const onClickFifth = () => {
    document.getElementById(5).textContent = "";
  }

  const onSavingPrinciple = () => {
    for(let i=1;i<=5;i++)
    {
        if(document.getElementById(i).textContent === '')
        {
            toast.error('Please select 5 items.');
            return;
        }
        if(i === 1)
        {
          SetPrinciple1(document.getElementById(i).textContent);
        }
        if(i === 2)
        {
          SetPrinciple2(document.getElementById(i).textContent);
        }
        if(i === 3)
        {
          SetPrinciple3(document.getElementById(i).textContent);
        }
        if(i === 4)
        {
          SetPrinciple4(document.getElementById(i).textContent);
        }
        if(i === 5)
        {
          SetPrinciple5(document.getElementById(i).textContent);
        }
    }
    navigate("/criteria");
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
                  <h1>Next, pick your principles</h1>
              </div>
              <div className='description'>
                  <h1>Select the 5 principles that you think are the most important to the success of the DAO. When proposals are made, you will be asked to consider how much advantage the proposal will provide in the most important areas. Your top 5 are in no particular order. View the definitions of the principles <a href="https://docs.reputationdao.co/repdao-governance/principles-definition" target="_blank" rel="noopener noreferrer">here</a>.</h1>
              </div>
              <div className='userselect'>
                  <div className='userselectboard'>
                      <div className='first'>
                          <h1>1.</h1>
                          <label id="1" onClick={onClickFirst}></label>
                      </div>
                      <div className='second'>
                          <h1>2.</h1>
                          <label id="2" onClick={onClickSecond}></label>
                      </div>
                      <div className='third'>
                          <h1>3.</h1>
                          <label id="3" onClick={onClickThird}></label>
                      </div>
                      <div className='fourth'>
                          <h1>4.</h1>
                          <label id="4" onClick={onClickFourth}></label>
                      </div>
                      <div className='fifth'>
                          <h1>5.</h1>
                          <label id="5" onClick={onClickFifth}></label>
                      </div>
                  </div>
              </div>
              <div className='items1'>
                  <div className='selectedItem1' id="Sustainability" onClick={onClickItem}>Sustainability</div>
                  <div className='selectedItem1' id="Prosperity" onClick={onClickItem}>Prosperity</div>
                  <div className='selectedItem1' id="Security" onClick={onClickItem}>Security</div>
                  <div className='selectedItem1' id="Collaboration" onClick={onClickItem}>Collaboration</div>
                  <div className='selectedItem1' id="Growth" onClick={onClickItem}>Growth</div>
                  <div className='selectedItem1' id="Improvement" onClick={onClickItem}>Improvement</div>
              </div>
              <div className='items2'>
                  <div className='selectedItem1' id="Innovation" onClick={onClickItem}>Innovation</div>
                  <div className='selectedItem1' id="Community" onClick={onClickItem}>Community</div>
                  <div className='selectedItem1' id="Meaning" onClick={onClickItem}>Meaning</div>
                  <div className='selectedItem1' id="Reputation" onClick={onClickItem}>Reputation</div>
                  <div className='selectedItem1' id="Reliability" onClick={onClickItem}>Reliability</div>
                  <div className='selectedItem1' id="Value" onClick={onClickItem}>Value</div>
              </div>
          </div>
          <div className='buttoncontent'>
              <button className="scale-105" onClick={onSavingPrinciple}><h1>Next</h1></button>
          </div>
        </div>
      </div>
      )}
      {below600 && (
      <div className="mainsection2_mobile">
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
                  <h1>Next, pick your principles</h1>
              </div>
              <div className='description mt-3'>
              <h1>Select the 5 principles that you think are the most important to the success of the DAO. When proposals are made, you will be asked to consider how much advantage the proposal will provide in the most important areas. Your top 5 are in no particular order. View the definitions of the principles <a href="https://docs.reputationdao.co/repdao-governance/principles-definition" target="_blank" rel="noopener noreferrer">here</a>.</h1>
              </div>
              <div className='userselect mt-4'>
                  <div className='userselectboard'>
                      <div className='first'>
                          <h1>1.</h1>
                          <label id="1" onClick={onClickFirst}></label>
                      </div>
                      <div className='second'>
                          <h1>2.</h1>
                          <label id="2" onClick={onClickSecond}></label>
                      </div>
                      <div className='third'>
                          <h1>3.</h1>
                          <label id="3" onClick={onClickThird}></label>
                      </div>
                      <div className='fourth'>
                          <h1>4.</h1>
                          <label id="4" onClick={onClickFourth}></label>
                      </div>
                      <div className='fifth'>
                          <h1>5.</h1>
                          <label id="5" onClick={onClickFifth}></label>
                      </div>
                  </div>
              </div>
              <div className='items1'>
                <div className='selectedItem' id="Sustainability" onClick={onClickItem}>Sustainability</div>
                <div className='selectedItem' id="Prosperity" onClick={onClickItem}>Prosperity</div>
                <div className='selectedItem' id="Security" onClick={onClickItem}>Security</div>
              </div>
              <div className='items2'>
                <div className='selectedItem' id="Collaboration" onClick={onClickItem}>Collaboration</div>
                <div className='selectedItem' id="Growth" onClick={onClickItem}>Growth</div>
                <div className='selectedItem' id="Improvement" onClick={onClickItem}>Improvement</div>
              </div>
              <div className='items3'>
                <div className='selectedItem' id="Innovation" onClick={onClickItem}>Innovation</div>
                <div className='selectedItem' id="Community" onClick={onClickItem}>Community</div>
                <div className='selectedItem' id="Meaning" onClick={onClickItem}>Meaning</div>
              </div>
              <div className='items4'>
                <div className='selectedItem' id="Reputation" onClick={onClickItem}>Reputation</div>
                <div className='selectedItem' id="Reliability" onClick={onClickItem}>Reliability</div>
                <div className='selectedItem' id="Value" onClick={onClickItem}>Value</div>
              </div>
          </div>
          <div className='buttoncontent'>
              <button className="scale-105" onClick={onSavingPrinciple}><h1>Next</h1></button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};
export default Principle;