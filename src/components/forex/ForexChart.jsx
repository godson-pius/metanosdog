import React from 'react'

const ForexChart = () => {
    return (
        <>
            <div>
                <iframe
                    src={'https://fxpricing.com/fx-widget/market-currency-rates-widget.php?id=1,2,3,5,14,20'}
                    width="100%"
                    height="290"
                    style={{ border: '1px solid #eee' }}
                    title="FX Pricing Widget"
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
        </>
    )
}

export default ForexChart