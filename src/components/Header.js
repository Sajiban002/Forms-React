import React from 'react';

function Header() {
  return (
    <header className="Header">
      <div className="Logo">
        <span className="LogoBrace">{"{"}</span>
        <span>Finsweet</span>
      </div>
      <nav className="Nav">
        <button className="SubscribeButton">Subscribe</button>
      </nav>
    </header>
  );
}

export default Header;