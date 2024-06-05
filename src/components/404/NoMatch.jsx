import React from 'react';
import "./style.css"

const NoMatch = () => {
  return (
    <React.Fragment>
      <div className="no__match">
        <h1>404 </h1>
        {/* <div class="cloak__wrapper">
          <div class="cloak__container">
            <div class="cloak"></div>
          </div>
        </div> */}
        <div class="info">
          <h2>Biz bu sahifani topa olmadik</h2>
          <p>Ishonchimiz komilki, bu sahifa ilgari bu yerda bo'lgan, lekin yo'qolganga o'xshaydi. Biz uning nomidan uzr so'raymiz.</p>
          {/* <a href="/"  rel="noreferrer noopener">Home</a> */}
          <a href='/dashboard' class="cybr-btn">
            Bosh sahifaga qaytish<span aria-hidden>_</span>
            <span aria-hidden class="cybr-btn__glitch">Bosh sahifaga qaytish_</span>
            <span aria-hidden class="cybr-btn__tag">404</span>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NoMatch;