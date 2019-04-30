import Pages from '../pages';
import React from 'react';
import Safe from 'react-safe';

export const getFBPixel = (asPath) => {
  switch (asPath) {
    case Pages.PackagePage:
    case Pages.CustomerRegisterPage:
    case Pages.CustomerThankYouPage:
      return (
        <React.Fragment>
          {/* Facebook Pixel Code */}
          <Safe.script>
            {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '1871953703096398');
fbq('track', 'PageView');`}
          </Safe.script>
            <noscript>
            <img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=1871953703096398&ev=PageView&noscript=1"/>
              </noscript>
            {/* End Facebook Pixel Code */}
        </React.Fragment>
      );
    default:
      return null;
  }
}

export const getGoogleRMKT = (asPath) => {
  switch (asPath) {
    case Pages.PackagePage:
    case Pages.CustomerRegisterPage:
    case Pages.CustomerThankYouPage:
      return (
        <React.Fragment>
          {/* Global site tag (gtag.js) - Google Ads: 938654182 */}
          <Safe.script>
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());        
gtag('config', 'AW-938654182');`}
          </Safe.script>
          {/* Event snippet for SME_OCT18 remarketing page */}
          <Safe.script>
            {`gtag('event', 'conversion', {
'send_to': 'AW-938654182/VE_cCIjGyooBEObzyr8D',
'value': 1.0,
'currency': 'THB',
'aw_remarketing_only': true
});`}
          </Safe.script>
        </React.Fragment>
      );
    default:
      return null;
    }
}

export const getGoogleAnalysis = () => (
  <Safe.script>{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-TC8XN6');`}</Safe.script>
)
