import style from './Footer.module.scss'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { scrollToId } from '../../handlers/scrollToId';


const Footer = () => {

    const handleRedirect = (url) => {
        window.open(url, '_blank');
    };

    return (
       <footer id='footer'>
            <div className={style.footerContainer}>
                <div className={style.footerContainerFlexTop}>
                    <div className={style.footerMyInfo}>
                        <h1>Matheus Harduim</h1>
                        <p>| Graduando da UERJ | Angular | Python | PHP | C++ | Git | Tecnologia da Informação | React |</p>
                    </div>
                    <div className={style.footerSocialMedia}>
                        <h1>Social</h1>
                        <div className={style.flexIcons}>
                            <FaLinkedinIn onClick={() => handleRedirect('https://linkedin.com/in/mcharduim')}  className={style.socialMediaIcons}/>
                            <FaGithub onClick={() => handleRedirect('https://github.com/harduim300')} className={style.socialMediaIcons}/>
                            <FaWhatsapp onClick={() => handleRedirect('https://wa.link/fsc3pu')} className={style.socialMediaIcons}/>
                        </div>
                    </div>
                </div>
                <div className={style.footerContainerFlexBottom}>
                    <nav className={style.menu_nav}>
                        <ul className={style.menu_list}>
                            <li><button onClick={() => scrollToId('home-main')}>Home</button></li>
                            <span>-</span>
                            <li><button onClick={() => scrollToId('about-me')}>Sobre Mim</button></li>
                            <span>-</span>
                            <li><button onClick={() => scrollToId('projects')}>Projetos</button></li>
                            <span>-</span>
                            <li><button onClick={() => scrollToId('email-form')}>Contato</button></li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={style.madeByMH}>&copy; Desenvolvido por Matheus Harduim</div>
       </footer>
    );
}

export default Footer;