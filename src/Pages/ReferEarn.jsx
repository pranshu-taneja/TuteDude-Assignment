import React from "react";
import "./ReferEarn.css";
import StepsToRefer from "../components/stepsToRefer/stepsToRefer";
import { Link } from "react-router-dom";

function ReferEarn() {
  return (
    <div className="ReferEarncontainer">
      <section className="ReferEarnRow1">
        <div className="balancebox">
          <div className="boxcontainer">
            <div className="refDetails">
              <div className="refDetail1">
                <p className="boxtoptext">Referral Earning</p>
                <p className="amounttext">₹ 2,500</p>
              </div>
              <div className="refDetail2">
                <p className="boxtoptext">Totoal Rewards</p>
                <p className="amounttext">₹ 7</p>
              </div>
              <div className="refDetail3">
                <p className="boxtoptext">Wallet Balance</p>
                <p className="amounttext">₹ 500</p>
              </div>
            </div>
            <button className="balance">Withdraw balance</button>
          </div>
        </div>

        <div className="ReferralCode">
          <p className="refertext">Your Referral Code</p>
          <div className="boxx codebox">
            <p>EDCH54</p>
          </div>
        </div>
      </section>

      <section className="ReferEarnRow2">
        <div className="stepsContainer">
          <div className="stepsContainerBox">
            <p>How does it work?</p>
            <div className="steps">
              <StepsToRefer
                img="src\assets\People.png"
                head="Invite your Friends"
                des="Share the link tutedude.com with your friends"
              />
              <StepsToRefer
                img="src\assets\coupon.png"
                head="Friend purchases any course"
                des="Using your REFERRAL CODE in the payments page"
              />
              <StepsToRefer
                img="src\assets\rupee.png"
                head="You get ₹ 200 as referral money"
                des="On total purchase the friend makes, into your wallet"
              />
              <StepsToRefer
                img="src\assets\discount.png"
                head="Your Friend gets ₹ 200 Off "
                des="On his overall fee on successful purchase using your referral code "
              />
              <StepsToRefer
                img="src\assets\wallet.png"
                head="Transfer money from wallet"
                des="When the wallet balance reaches ₹200 or more, you can withdraw it"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="ReferEarnRow3">
        <div className="footerLinks">
          <Link to={"/ReferEarn/FriendsReferred"}>Friends Who Enrolled </Link>
          <a href="">Terms & Conditions </a>
        </div>
      </section>
    </div>
  );
}

export default ReferEarn;
