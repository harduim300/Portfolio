import { useNavigate, useLocation } from 'react-router-dom';
import style from './Footer.module.scss';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { scrollToId } from '../../handlers/scrollToId';
import { acessouContato, acessouMeuGithub, acessouMeuLinkedin, acessouMeuWhatsApp, acessouPoliticaPrivacidade, acessouProjetos, acessouSobreMim } from '../../../metaTracking';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  const handleScrollOrNavigate = (route, sectionId) => {
    if (location.pathname !== route) {
      navigate(route);
      setTimeout(() => {
        scrollToId(sectionId);
      }, 200);
    } else {
      scrollToId(sectionId);
    }
  };

  return (
    <footer id="footer">
      <div className={style.footerContainer}>
        <div className={style.footerContainerFlexTop}>
          <div className={style.footerMyInfo}>
            <h1>Matheus Harduim</h1>
            <p>
            Desenvolvedor Full-Stack
            </p>
          </div>
          <div className={style.footerSocialMedia}>
            <h1>Social</h1>
            <div className={style.flexIcons}>
              <FaLinkedinIn onClick={() => {
                acessouMeuLinkedin()
                handleRedirect('https://linkedin.com/in/mcharduim')
              }} className={style.socialMediaIcons} />
              <FaGithub onClick={() => {
                acessouMeuGithub()
                handleRedirect('https://github.com/harduim300')
              }} className={style.socialMediaIcons} />
              <FaWhatsapp onClick={() => {
                acessouMeuWhatsApp()
                handleRedirect('https://wa.link/fsc3pu')
              }} className={style.socialMediaIcons} />
            </div>
          </div>
        </div>

        <div className={style.footerContainerFlexBottom}>
          <nav className={style.menu_nav}>
            <ul className={style.menu_list}>
              <li>
                <button onClick={() => handleScrollOrNavigate('/','home-main')}>Home</button>
              </li>
              <span className={style.disableMobile}>-</span>
              <li>
                <button onClick={() => {
                  acessouSobreMim()
                  handleScrollOrNavigate('/','about-me')
                }}>Sobre Mim</button>
              </li>
              <span className={style.disableMobile}>-</span>
              <li>
                <button onClick={() => {
                  acessouProjetos()
                  handleScrollOrNavigate('/','projects')
                }}>Projetos</button>
              </li>
              <span className={style.disableMobile}>-</span>
              <li>
                <button onClick={() => {
                  acessouContato()
                  handleScrollOrNavigate('/','email-form')
                }}>Contato</button>
              </li>
              <span className={style.disableMobile}>-</span>
              <li>
                <button onClick={() => {
                  acessouPoliticaPrivacidade()
                  handleScrollOrNavigate('/politica-de-privacidade','privacyPolicy')
                }}>Política de Privacidade</button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Adicionando Política de Privacidade */}

      <div className={style.madeByMH}>&copy; Desenvolvido por Matheus Harduim</div>
    </footer>
  );
};

export default Footer;
