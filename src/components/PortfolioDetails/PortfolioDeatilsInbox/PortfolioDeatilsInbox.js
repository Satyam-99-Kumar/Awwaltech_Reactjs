import React from "react";
import inbox from "../PortfolioDeatilsInbox/PortfolioDeatilsInbox.module.scss";
import inboximg from "../../../assets/PortfolioDetails/inbox.png";


export default function PortfolioDetailsintro() {
  return (
    <div>
        <img className={inbox.in_img} src={inboximg} alt=""></img>

    </div>
  );
}
