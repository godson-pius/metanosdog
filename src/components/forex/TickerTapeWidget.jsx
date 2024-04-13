import React from 'react'

const TickerTapeWidget = () => {
  return (
    <div>
      <iframe
        src="https://fxpricing.com/fx-widget/ticker-tape-widget.php?id=1,2,3,5,14,20&d_mode=compact-name"
        width="100%"
        height="85"
        style={{ border: 'unset' }}
        title="FX Pricing Ticker Tape Widget"
      ></iframe>
      <div id="fx-pricing-widget-copyright">
        <span>Powered by </span>
        <a href="https://fxpricing.com/" target="_blank" rel="noopener noreferrer">
          FX Pricing
        </a>
      </div>
      <style jsx>{`
        #fx-pricing-widget-copyright {
          text-align: center;
          font-size: 13px;
          font-family: sans-serif;
          margin-top: 10px;
          margin-bottom: 10px;
          color: #9db2bd;
        }
        #fx-pricing-widget-copyright a {
          text-decoration: unset;
          color: #bb3534;
          font-weight: 600;
        }
      `}</style>
    </div>
  )
}

export default TickerTapeWidget