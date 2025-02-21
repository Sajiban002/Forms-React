import React from 'react';

function Footer() {
  return (
    <footer className="footerContainer">
      <div className="footerTop">
        <div className="footerLogo">
          <span className="footerLogoBrace">{"{"}</span>
          <span>Finsweet</span>
        </div>
      </div>
      <div className="footerSubscribeSection">
        <div className="subscribeContainer">
          <h2 className="footerSubscribeTitle">Subscribe to our news letter to get latest updates and news</h2>
          <div className="footerSubscribeForm">
            <input type="email" placeholder="Enter Your Email" className="footerEmailInput" />
            <button className="footerSubscribeButton">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footerInfoSection">
        <div className="footerContactInfo">
          <p className="footerAddress">Finstreet 118 2561 Fintown</p>
          <p className="footerContact">Hello@finsweet.com  020 7993 2905</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;