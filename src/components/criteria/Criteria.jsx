import React, { useContext, useEffect, useState } from "react";
import { useMedia } from "react-use";
import { useNavigate } from "react-router-dom";
import "./criteria.css";
import WalletConnectLogo from "../../assets/WalletConnectLogo.png";
import mainlogo from "../../assets/mainlogo.png";
import genesis_icon from "../../assets/genesis_icon.png";
import airdrop_icon from "../../assets/airdrop_icon.png";
import dao_icon from "../../assets/dao_icon.png";
import vector_icon from "../../assets/vector_icon.svg";
import twitter_icon from "../../assets/twitter_icon.svg";
import telegram_icon from "../../assets/telegram_icon.svg";
import connected_status_icon from "../../assets/connected_status.png";
import general_check from "../../assets/general_check.png";
import confirm_check from "../../assets/confirm_check.png";
import general_cross from "../../assets/general_cross.png";
import confirm_cross from "../../assets/confirm_cross.png";
import menu_button from "../../assets/menu_button.svg";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { connectWallet } from "../../core/interact";
import { toast } from "react-toastify";
import * as env from "../../env";
import axios from "axios";

export const Criteria = () => {
  const navigate = useNavigate();
  const { walletAddress, SetWalletAddress } = useContext(UserContext);
  const { email } = useContext(UserContext);
  const { principle1 } = useContext(UserContext);
  const { principle2 } = useContext(UserContext);
  const { principle3 } = useContext(UserContext);
  const { principle4 } = useContext(UserContext);
  const { principle5 } = useContext(UserContext);
  const [item1Status, SetItem1Status] = useState(0);
  const [item2Status, SetItem2Status] = useState(0);
  const [item3Status, SetItem3Status] = useState(0);
  const [item4Status, SetItem4Status] = useState(0);
  const [item5Status, SetItem5Status] = useState(0);
  const [item6Status, SetItem6Status] = useState(0);
  const [item7Status, SetItem7Status] = useState(0);
  const [item8Status, SetItem8Status] = useState(0);
  const [isOpen, SetMenuButtonStatus] = useState(false);

  const [pending, setPending] = useState(false);

  useEffect(() => {
    const connectWalletPressed = async () => {
      const walletResponse = await connectWallet();
      SetWalletAddress(walletResponse.address);
    };
    connectWalletPressed();
  });

  const onCheckItem1 = () => {
    SetItem1Status(1);
  };

  const onCrossItem1 = () => {
    SetItem1Status(2);
  };

  const onCheckItem2 = () => {
    SetItem2Status(1);
  };

  const onCrossItem2 = () => {
    SetItem2Status(2);
  };

  const onCheckItem3 = () => {
    SetItem3Status(1);
  };

  const onCrossItem3 = () => {
    SetItem3Status(2);
  };

  const onCheckItem4 = () => {
    SetItem4Status(1);
  };

  const onCrossItem4 = () => {
    SetItem4Status(2);
  };

  const onCheckItem5 = () => {
    SetItem5Status(1);
  };

  const onCrossItem5 = () => {
    SetItem5Status(2);
  };

  const onCheckItem6 = () => {
    SetItem6Status(1);
  };

  const onCrossItem6 = () => {
    SetItem6Status(2);
  };

  const onCheckItem7 = () => {
    SetItem7Status(1);
  };

  const onCrossItem7 = () => {
    SetItem7Status(2);
  };

  const onCheckItem8 = () => {
    SetItem8Status(1);
  };

  const onCrossItem8 = () => {
    SetItem8Status(2);
  };

  const isVote = ["", "Yes", "No"];

  const onSubmit = async () => {
    document.getElementById("submit").disabled = true;
    if (
      !item1Status ||
      !item2Status ||
      !item3Status ||
      !item4Status ||
      !item5Status ||
      !item6Status ||
      !item7Status ||
      !item8Status
    ) {
      toast.error("Please check all items.");
      return;
    }

    const data = {
      address: walletAddress,
      // email: email,
      principles: [principle1, principle2, principle3, principle4, principle5],
      criteria: {
        "Commercialise reputation and verification services.":
          isVote[item1Status],
        "Provide liquidity to other protocols.": isVote[item2Status],
        "Utilise treasury funds in yield and staking.": isVote[item3Status],
        "Fund bad actor detection and bounty hunting.": isVote[item4Status],
        "Fund development of RDAO ecosystem.": isVote[item5Status],
        "Actively manage DAO as an investment fund.": isVote[item6Status],
        "Invest in early stage protocols.": isVote[item7Status],
        "Invest in NFT’s.": isVote[item8Status],
      },
    };

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setPending(true);

      const account = accounts[0];

      const message = JSON.stringify(data);
      const signature = await window.ethereum.request({
        method: "personal_sign",
        params: [message, account],
      });

      const response = await axios.post(
        `${env.API_URL}/genesis/save_proposal`,
        {
          data: data,
          signData: signature,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setPending(false);
      console.log(response);
      if (response.status === 200) {
        const rlt = response.data;
        console.log(rlt);
        if (rlt.success) {
          toast.success("Sign success");
          navigate("/result");
        } else {
          toast.error("Sign failed:");
        }
      } else {
        toast.error("API ${env.API_URL} call failed");
      }
    } catch (error) {
      toast.error("Error signing message:" + error);
    }
    document.getElementById("submit").disabled = false;
  };

  const onMenuButtonClick = () => {
    SetMenuButtonStatus(!isOpen);
  };

  const below600 = useMedia("(max-width: 1000px)");
  return (
    <div>
      {!below600 && (
        <div className="mainsection">
          <div className="menu">
            <div className="logoitem">
              <img src={WalletConnectLogo} alt="walletconnectlogo" />
              <div className="menuitems">
                <Link to="/collectemail">
                  <div className="genesis_icon">
                    <img src={genesis_icon} alt="genesis_icon" />
                    <h1>Genesis</h1>
                  </div>
                </Link>
                <div className="dao_icon">
                  <img src={dao_icon} alt="dao_icon" />
                  <h1>DAO</h1>
                </div>
                <div className="airdrop_icon">
                  <img src={airdrop_icon} alt="airdrop_icon" />
                  <h1>Airdrop</h1>
                </div>
              </div>
            </div>
            <div className="social_icon">
              <a
                href="https://docs.reputationdao.co/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={vector_icon} alt="vector_icon" />
              </a>
              <a
                href="https://twitter.com/ReputationDAO"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter_icon} alt="twitter_icon" />
              </a>
              <a
                href="https://discord.gg/qz4YNZNkHN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={telegram_icon} alt="telegram_icon" />
              </a>
            </div>
          </div>
          <div className="content">
            <div className="real-content">
              <div className="walletinfo">
                <div className="walletaddress">
                  <img
                    src={connected_status_icon}
                    alt="connected_status_icon"
                  />
                  <h1>
                    {walletAddress.substring(0, 4) +
                      "..." +
                      walletAddress.substring(
                        walletAddress.length - 2,
                        walletAddress.length
                      )}
                  </h1>
                </div>
              </div>
              <div className="mainlogo">
                <img src={mainlogo} alt="mainlogo" />
              </div>
              <div className="title">
                <h1>Lastly, pick your criteria</h1>
              </div>
              <div className="description">
                <h1>
                  The ReputationDAO has one objective: Generate returns for REPD
                  holders by supporting the wider crypto ecosystem. Select the
                  ways you think that the DAO should do in order to achieve
                  this! View descriptions of these activities{" "}
                  <a
                    href="https://docs.reputationdao.co/repdao-governance/criteria-definitions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  .
                </h1>
              </div>
              <div className="options">
                <div className="option">
                  <h1>Commercialise reputation and verification services.</h1>
                  <div className="checkbuttons">
                    {item1Status === 1 && (
                      <img src={confirm_check} alt="confirm_check" />
                    )}
                    {item1Status !== 1 && (
                      <img
                        src={general_check}
                        alt="general_check"
                        onClick={onCheckItem1}
                      />
                    )}
                    {item1Status === 2 && (
                      <img src={confirm_cross} alt="confirm_cross" />
                    )}
                    {item1Status !== 2 && (
                      <img
                        src={general_cross}
                        alt="general_cross"
                        onClick={onCrossItem1}
                      />
                    )}
                  </div>
                </div>
                <div className="option">
                  <h1>Provide liquidity to other protocols.</h1>
                  <div className="checkbuttons">
                    {item2Status === 1 && (
                      <img src={confirm_check} alt="confirm_check" />
                    )}
                    {item2Status !== 1 && (
                      <img
                        src={general_check}
                        alt="general_check"
                        onClick={onCheckItem2}
                      />
                    )}
                    {item2Status === 2 && (
                      <img src={confirm_cross} alt="confirm_cross" />
                    )}
                    {item2Status !== 2 && (
                      <img
                        src={general_cross}
                        alt="general_cross"
                        onClick={onCrossItem2}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="options">
                <div className="option">
                  <h1>Utilise treasury funds in yield and staking.</h1>
                  <div className="checkbuttons">
                    {item3Status === 1 && (
                      <img src={confirm_check} alt="confirm_check" />
                    )}
                    {item3Status !== 1 && (
                      <img
                        src={general_check}
                        alt="general_check"
                        onClick={onCheckItem3}
                      />
                    )}
                    {item3Status === 2 && (
                      <img src={confirm_cross} alt="confirm_cross" />
                    )}
                    {item3Status !== 2 && (
                      <img
                        src={general_cross}
                        alt="general_cross"
                        onClick={onCrossItem3}
                      />
                    )}
                  </div>
                </div>
                <div className="option">
                  <h1>Fund bad actor detection and bounty hunting.</h1>
                  <div className="checkbuttons">
                    {item4Status === 1 && (
                      <img src={confirm_check} alt="confirm_check" />
                    )}
                    {item4Status !== 1 && (
                      <img
                        src={general_check}
                        alt="general_check"
                        onClick={onCheckItem4}
                      />
                    )}
                    {item4Status === 2 && (
                      <img src={confirm_cross} alt="confirm_cross" />
                    )}
                    {item4Status !== 2 && (
                      <img
                        src={general_cross}
                        alt="general_cross"
                        onClick={onCrossItem4}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="options">
                <div className="option">
                  <h1>Fund development of RDAO ecosystem.</h1>
                  <div className="checkbuttons">
                    {item5Status === 1 && (
                      <img src={confirm_check} alt="confirm_check" />
                    )}
                    {item5Status !== 1 && (
                      <img
                        src={general_check}
                        alt="general_check"
                        onClick={onCheckItem5}
                      />
                    )}
                    {item5Status === 2 && (
                      <img src={confirm_cross} alt="confirm_cross" />
                    )}
                    {item5Status !== 2 && (
                      <img
                        src={general_cross}
                        alt="general_cross"
                        onClick={onCrossItem5}
                      />
                    )}
                  </div>
                </div>
                <div className="option">
                  <h1>Actively manage DAO as an investment fund.</h1>
                  <div className="checkbuttons">
                    {item6Status === 1 && (
                      <img src={confirm_check} alt="confirm_check" />
                    )}
                    {item6Status !== 1 && (
                      <img
                        src={general_check}
                        alt="general_check"
                        onClick={onCheckItem6}
                      />
                    )}
                    {item6Status === 2 && (
                      <img src={confirm_cross} alt="confirm_cross" />
                    )}
                    {item6Status !== 2 && (
                      <img
                        src={general_cross}
                        alt="general_cross"
                        onClick={onCrossItem6}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="options">
                <div className="option">
                  <h1>Invest in early stage protocols.</h1>
                  <div className="checkbuttons">
                    {item7Status === 1 && (
                      <img src={confirm_check} alt="confirm_check" />
                    )}
                    {item7Status !== 1 && (
                      <img
                        src={general_check}
                        alt="general_check"
                        onClick={onCheckItem7}
                      />
                    )}
                    {item7Status === 2 && (
                      <img src={confirm_cross} alt="confirm_cross" />
                    )}
                    {item7Status !== 2 && (
                      <img
                        src={general_cross}
                        alt="general_cross"
                        onClick={onCrossItem7}
                      />
                    )}
                  </div>
                </div>
                <div className="option">
                  <h1>Invest in NFT’s.</h1>
                  <div className="checkbuttons">
                    {item8Status === 1 && (
                      <img src={confirm_check} alt="confirm_check" />
                    )}
                    {item8Status !== 1 && (
                      <img
                        src={general_check}
                        alt="general_check"
                        onClick={onCheckItem8}
                      />
                    )}
                    {item8Status === 2 && (
                      <img src={confirm_cross} alt="confirm_cross" />
                    )}
                    {item8Status !== 2 && (
                      <img
                        src={general_cross}
                        alt="general_cross"
                        onClick={onCrossItem8}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="buttoncontent">
              <button
                id="submit"
                className="text-white text-center text-[12px] sm:text-[18px] md:text-[24px] lg:text-[36px] not-italic font-medium"
                style={{ fontFamily: "Inter", lineHeight: "normal" }}
                onClick={onSubmit}
              >
                {!pending && "Submit"}
                {pending && (
                  <>
                    <svg
                      aria-hidden="true"
                      role="status"
                      class="inline w-4 h-4 mr-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Signing...
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
      {below600 && (
        <div className="mainsection_mobile">
          <div className="menu_mobile">
            <div className="menu_button">
              <img
                src={menu_button}
                alt="menu_button"
                onClick={onMenuButtonClick}
              />
              <div className="logoitem">
                <img src={mainlogo} alt="mainlogo" />
              </div>
              <div className="walletinfo">
                <div className="walletaddress">
                  <img
                    src={connected_status_icon}
                    alt="connected_status_icon"
                  />
                  <h1>
                    {walletAddress.substring(0, 4) +
                      "..." +
                      walletAddress.substring(
                        walletAddress.length - 2,
                        walletAddress.length
                      )}
                  </h1>
                </div>
              </div>
            </div>
            {isOpen && (
              <div className="menu">
                <div className="menuitems">
                  <Link to="/collectemail">
                    <div className="genesis_icon">
                      <img src={genesis_icon} alt="genesis_icon" />
                      <h1>Genesis</h1>
                    </div>
                  </Link>
                  <div className="dao_icon">
                    <img src={dao_icon} alt="dao_icon" />
                    <h1>DAO</h1>
                  </div>
                  <div className="airdrop_icon">
                    <img src={airdrop_icon} alt="airdrop_icon" />
                    <h1>Airdrop</h1>
                  </div>
                </div>
                <div className="social_icon">
                  <a
                    href="https://docs.reputationdao.co/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={vector_icon} alt="vector_icon" />
                  </a>
                  <a
                    href="https://twitter.com/ReputationDAO"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={twitter_icon} alt="twitter_icon" />
                  </a>
                  <a
                    href="https://discord.gg/qz4YNZNkHN"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={telegram_icon} alt="telegram_icon" />
                  </a>
                </div>
              </div>
            )}
          </div>
          <div className="content">
            <div className="real-content">
              <div className="title">
                <h1>Lastly, pick your criteria</h1>
              </div>
              <div className="description">
                <h1>
                  The ReputationDAO has one objective: Generate returns for REPD
                  holders by supporting the wider crypto ecosystem. Select the
                  ways you think that the DAO should do in order to achieve
                  this! View descriptions of these activities{" "}
                  <a
                    href="https://docs.reputationdao.co/repdao-governance/criteria-definitions"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  .
                </h1>
              </div>
              <div className="options">
                <div className="option">
                  <h1>Commercialise reputation and verification services.</h1>
                  <div className="checkbuttons">
                    {item1Status === 1 && (
                      <img src={confirm_check} alt="confirm_check" />
                    )}
                    {item1Status !== 1 && (
                      <img
                        src={general_check}
                        alt="general_check"
                        onClick={onCheckItem1}
                      />
                    )}
                    {item1Status === 2 && (
                      <img src={confirm_cross} alt="confirm_cross" />
                    )}
                    {item1Status !== 2 && (
                      <img
                        src={general_cross}
                        alt="general_cross"
                        onClick={onCrossItem1}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="options">
                <div className="option">
                  <h1>Provide liquidity to other protocols.</h1>
                  <div className="checkbuttons">
                    {item2Status === 1 && (
                      <img src={confirm_check} alt="confirm_check" />
                    )}
                    {item2Status !== 1 && (
                      <img
                        src={general_check}
                        alt="general_check"
                        onClick={onCheckItem2}
                      />
                    )}
                    {item2Status === 2 && (
                      <img src={confirm_cross} alt="confirm_cross" />
                    )}
                    {item2Status !== 2 && (
                      <img
                        src={general_cross}
                        alt="general_cross"
                        onClick={onCrossItem2}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="options">
                <div className="option">
                  <h1>Utilise treasury funds in yield and staking.</h1>
                  <div className="checkbuttons">
                    {item3Status === 1 && (
                      <img src={confirm_check} alt="confirm_check" />
                    )}
                    {item3Status !== 1 && (
                      <img
                        src={general_check}
                        alt="general_check"
                        onClick={onCheckItem3}
                      />
                    )}
                    {item3Status === 2 && (
                      <img src={confirm_cross} alt="confirm_cross" />
                    )}
                    {item3Status !== 2 && (
                      <img
                        src={general_cross}
                        alt="general_cross"
                        onClick={onCrossItem3}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="options">
                <div className="option">
                  <h1>Fund bad actor detection and bounty hunting.</h1>
                  <div className="checkbuttons">
                    {item4Status === 1 && (
                      <img src={confirm_check} alt="confirm_check" />
                    )}
                    {item4Status !== 1 && (
                      <img
                        src={general_check}
                        alt="general_check"
                        onClick={onCheckItem4}
                      />
                    )}
                    {item4Status === 2 && (
                      <img src={confirm_cross} alt="confirm_cross" />
                    )}
                    {item4Status !== 2 && (
                      <img
                        src={general_cross}
                        alt="general_cross"
                        onClick={onCrossItem4}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="options">
                <div className="option">
                  <h1>Fund development of RDAO ecosystem.</h1>
                  <div className="checkbuttons">
                    {item5Status === 1 && (
                      <img src={confirm_check} alt="confirm_check" />
                    )}
                    {item5Status !== 1 && (
                      <img
                        src={general_check}
                        alt="general_check"
                        onClick={onCheckItem5}
                      />
                    )}
                    {item5Status === 2 && (
                      <img src={confirm_cross} alt="confirm_cross" />
                    )}
                    {item5Status !== 2 && (
                      <img
                        src={general_cross}
                        alt="general_cross"
                        onClick={onCrossItem5}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="options">
                <div className="option">
                  <h1>Actively manage DAO as an investment fund.</h1>
                  <div className="checkbuttons">
                    {item6Status === 1 && (
                      <img src={confirm_check} alt="confirm_check" />
                    )}
                    {item6Status !== 1 && (
                      <img
                        src={general_check}
                        alt="general_check"
                        onClick={onCheckItem6}
                      />
                    )}
                    {item6Status === 2 && (
                      <img src={confirm_cross} alt="confirm_cross" />
                    )}
                    {item6Status !== 2 && (
                      <img
                        src={general_cross}
                        alt="general_cross"
                        onClick={onCrossItem6}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="options">
                <div className="option">
                  <h1>Invest in early stage protocols.</h1>
                  <div className="checkbuttons">
                    {item7Status === 1 && (
                      <img src={confirm_check} alt="confirm_check" />
                    )}
                    {item7Status !== 1 && (
                      <img
                        src={general_check}
                        alt="general_check"
                        onClick={onCheckItem7}
                      />
                    )}
                    {item7Status === 2 && (
                      <img src={confirm_cross} alt="confirm_cross" />
                    )}
                    {item7Status !== 2 && (
                      <img
                        src={general_cross}
                        alt="general_cross"
                        onClick={onCrossItem7}
                      />
                    )}
                  </div>
                </div>
              </div>
              <div className="options">
                <div className="option">
                  <h1>Invest in NFT’s.</h1>
                  <div className="checkbuttons">
                    {item8Status === 1 && (
                      <img src={confirm_check} alt="confirm_check" />
                    )}
                    {item8Status !== 1 && (
                      <img
                        src={general_check}
                        alt="general_check"
                        onClick={onCheckItem8}
                      />
                    )}
                    {item8Status === 2 && (
                      <img src={confirm_cross} alt="confirm_cross" />
                    )}
                    {item8Status !== 2 && (
                      <img
                        src={general_cross}
                        alt="general_cross"
                        onClick={onCrossItem8}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="buttoncontent">
              <button
                id="submit"
                className="text-white text-center text-[12px] sm:text-[18px] md:text-[24px] lg:text-[36px] not-italic font-medium"
                style={{ fontFamily: "Inter", lineHeight: "normal" }}
                onClick={onSubmit}
              >
                {!pending && "Submit"}
                {pending && (
                  <>
                    <svg
                      aria-hidden="true"
                      role="status"
                      class="inline w-4 h-4 mr-3 text-white animate-spin"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor"
                      />
                    </svg>
                    Signing...
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Criteria;
