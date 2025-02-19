import React, { useState, useEffect } from 'react';
import style from './CookieConsent.module.scss';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    
    // Se o consentimento for 'true', ativa o rastreamento
    if (consent === 'true') {
      setIsAccepted(true);
      enableTracking();
    } else if (consent === 'false') {
      setIsVisible(false); // Não exibe o banner se recusado
    } else {
      setIsVisible(true); // Exibe o banner se não houver escolha
    }
  }, []);

  const acceptCookies = () => {
    setIsAccepted(true);
    setIsVisible(false);
    localStorage.setItem('cookie-consent', 'true');
    enableTracking();  // Ativa o rastreamento após o consentimento
    window.location.reload();

  };

  const declineCookies = () => {
    setIsAccepted(false);
    setIsVisible(false);
    localStorage.setItem('cookie-consent', 'false');
    // Recarregar a página após recusar os cookies
    window.location.reload();
  };

  const enableTracking = () => {
    // Ativa os scripts do rastreamento, como o Facebook Pixel
    if (window.fbq) {
      fbq('init', '615892961175593');  // Substitua pelo seu ID do Pixel
      fbq('track', 'PageView');
    }
  };

  // Se não for visível, não renderiza o banner
  if (!isVisible) {
    return null;
  }

  return (
    <div className={style.cookie_consent_container_flex}>
        <div className={style.cookie_consent}>
        <p>
            Esse site utiliza cookies para melhorar a sua experiência. Ao continuar navegando, você aceita nossa  
            <a href="http://localhost:5173/politica-de-privacidade" target="_blank" rel="noopener noreferrer" className={style.cookie_consent_link}>
            política de cookies
            </a>.
        </p>
        <div className={style.btn_space_mobile}>
            <button onClick={acceptCookies} className={style.cookie_consent_button_accept}>
                Aceitar
            </button>
            <button onClick={declineCookies} className={style.cookie_consent_button_decline}>
                Recusar
            </button>
        </div>
        </div>
    </div>
  );
};

export default CookieConsent;
